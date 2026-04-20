'use server';

import { db, GeneratedDocument } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { DOCUMENT_TEMPLATES } from "@/lib/templates"; // Import at top level

function formatDateFull(dateString: string): string {
    // Input: YYYY-MM-DD (e.g., 2026-01-28)
    if (!dateString) return dateString;
    const [year, month, day] = dateString.split('-').map(Number);

    // Validate
    if (!year || !month || !day) return dateString;

    const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    // Format: "15 de janeiro de 2026" (day without leading zero)
    return `${day} de ${months[month - 1]} de ${year}`;
}

export async function generateDocument(projectId: string | null, templateId: string, templateName: string, formData: Record<string, any>) {
    // 1. Determine new version
    let existingDocs: GeneratedDocument[] = [];

    if (projectId) {
        existingDocs = await db.getGeneratedDocuments(projectId);
    } else {
        // For standalone, we get ALL docs and filter for standalone ones
        const allDocs = await db.getAllGeneratedDocuments();
        existingDocs = allDocs.filter(d => d.projectId === null);
    }

    const sameTemplateDocs = existingDocs.filter(d => d.templateId === templateId);
    const version = sameTemplateDocs.length + 1;

    // 2. Load Template Definition first to get context
    const templateDef = DOCUMENT_TEMPLATES.find((t: any) => t.id === templateId);

    if (!templateDef || !templateDef.templateFile) {
        console.error(`TemplateDefinitionNotFound: ID=${templateId}`);
        throw new Error('Template file not configured.');
    }

    // 3. Prepare Data for Template
    const preparedData = { ...formData };

    // Apply special date formatting rule for 'data_documento'
    if (preparedData['data_documento']) {
        preparedData['data_documento'] = formatDateFull(preparedData['data_documento']);
    }

    // --- EQUATORIAL SPECIFIC LOGIC ---
    // Inject {concessionaria_nome} and {estado_nome} if missing
    if (templateDef.concessionaireId) {
        const allConcessionaires = await db.getConcessionaires();
        const conc = allConcessionaires.find(c => c.id === templateDef.concessionaireId);

        if (conc) {
            // Inject Concessionaire Name (Force Uppercase for Equatorial)
            // Check if it's an Equatorial template (IDs 101-105)
            const isEquatorial = ['101', '102', '103', '104', '105'].includes(conc.id);

            if (isEquatorial) {
                // If ID is mapped to a state, use the state name to construct the full concessionaire name
                // IDs: 101->MA, 102->PI, 103->GO, 104->AL, 105->PA
                // We should rely on conc.stateId lookup which we do below. 
                // Let's reorganize to get state FIRST.
            } else {
                preparedData['concessionaria_nome'] = conc.name;
            }

            // Inject State Name & Construct Equatorial Name
            if (conc.stateId) {
                const allStates = await db.getStates();
                const st = allStates.find(s => s.id === conc.stateId);
                if (st) {
                    preparedData['estado_nome'] = st.name;
                    preparedData['estado_uf'] = st.uf;

                    if (isEquatorial) {
                        // Force "EQUATORIAL [STATE NAME]"
                        preparedData['concessionaria_nome'] = `EQUATORIAL ${st.name.toUpperCase()}`;
                    }
                }
            }
        }
    }

    const templatePath = path.resolve(process.cwd(), templateDef.templateFile);
    console.log(`Loading template from: ${templatePath}`);

    if (!fs.existsSync(templatePath)) {
        console.error(`FileDoesNotExist: ${templatePath}`);
        throw new Error(`Template file missing at: ${templateDef.templateFile}`);
    }

    // 4. Generate DOCX
    try {
        const content = fs.readFileSync(templatePath, 'binary');
        const zip = new PizZip(content);

        // --- AUTO-CLEANUP START ---
        try {
            const xmlFile = "word/document.xml";
            const fileInZip = zip.file(xmlFile);

            if (fileInZip) {
                let xml = fileInZip.asText();
                xml = xml.replace(/<w:proofErr[^>]*\/>/g, "");
                xml = xml.replace(/<w:gramE[^>]*\/>/g, "");
                xml = xml.replace(/<w:lang[^>]*\/>/g, "");
                xml = xml.replace(/w:rsidR="[^"]*"/g, "");
                xml = xml.replace(/w:rsidRPr="[^"]*"/g, "");
                xml = xml.replace(/w:rsidRDefault="[^"]*"/g, "");
                xml = xml.replace(/w:rsidP="[^"]*"/g, "");
                xml = xml.replace(/<w:bookmarkStart[^>]*\/>/g, "");
                xml = xml.replace(/<w:bookmarkEnd[^>]*\/>/g, "");
                zip.file(xmlFile, xml);
            }
        } catch (cleanError) {
            console.warn("Failed to auto-clean XML, proceeding with original:", cleanError);
        }
        // --- AUTO-CLEANUP END ---

        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
            delimiters: { start: '{', end: '}' },
        });

        doc.render(preparedData);

        const buf = doc.getZip().generate({
            type: "nodebuffer",
            compression: "DEFLATE",
        });

        // 5. Save File
        let fileName = '';

        // Check if it is Equatorial Solicitação
        if (templateId.includes('equatorial-solicitacao')) {
            fileName = 'NT.00016.EQTL-03-ANEXO-III-NT.016.EQTL-Termo-de-Solicitacao-de-Compartilhamento.docx';
        } else if (templateId.includes('equatorial-procuracao')) {
            const uf = preparedData['estado_uf'] || 'UF';
            const safeUf = uf.replace(/[^a-zA-Z]/g, '').toUpperCase();
            fileName = `Procuracao_Equatorial_${safeUf}_v${version}.docx`;
        } else if (templateId.includes('enel-ce-solicitacao')) {
            fileName = 'Solicitação_de_Compartilhamento.docx';
        } else {
            const companyName = formData['empresa_razao_social'] || formData['nome_razao_social'] || 'AVULSO';
            const safeCompanyName = companyName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().substring(0, 15);
            const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
            fileName = `Doc_${safeCompanyName}_v${version}_${dateStr}.docx`;
        }

        const docId = crypto.randomUUID();

        // 6. Persist to DB
        const newDoc: GeneratedDocument = {
            id: docId,
            projectId,
            templateId,
            templateName,
            data: preparedData, // Save generated data including injected fields
            createdAt: new Date().toISOString(),
            version: version,
            createdBy: 'Usuário Demo',
            fileUrl: `/api/download/${docId}`,
            fileName: fileName,
            fileData: buf.toString('base64'),
            context: projectId ? 'PROJECT' : 'STANDALONE'
        };

        await db.addGeneratedDocument(newDoc);

        revalidatePath(`/documentos`);
        if (projectId) {
            revalidatePath(`/projetos/${projectId}`);
        }

        return { success: true, document: newDoc };
    } catch (error: any) {
        console.error('Error:', error);
        throw new Error(`Failed: ${error.message}`);
    }
}

export async function getProjectDocuments(projectId: string) {
    return await db.getGeneratedDocuments(projectId);
}

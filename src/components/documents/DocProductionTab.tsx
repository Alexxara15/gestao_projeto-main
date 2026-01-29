'use client';

import { useState, useEffect } from "react";
// ... imports
import { Project, Company, GeneratedDocument } from "@/lib/db";
import { DocumentTemplate } from "@/lib/templates";
import { DocSelector } from "./DocSelector";
import { DocForm } from "./DocForm";
import { DocHistory } from "./DocHistory";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface DocProductionTabProps {
    project?: Project | null;
    company?: Company | null;
    companies?: Company[]; // Added this prop
    concessionaires: { id: string, name: string, stateId?: string }[];
    states: { id: string, name: string, uf: string }[];
    initialDocuments: GeneratedDocument[];
    docToEdit?: GeneratedDocument | null;
    onExit?: () => void;
}

export function DocProductionTab({ project, company, companies = [], concessionaires, states, initialDocuments, docToEdit, onExit }: DocProductionTabProps) {
    // ...
    // Effect to handle external edit requests
    const [lastEditedId, setLastEditedId] = useState<string>('');

    // View state: 'selector' | 'form'
    const [view, setView] = useState<'selector' | 'form'>('selector');
    const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);

    const [initialFormData, setInitialFormData] = useState<Record<string, any>>({});

    // Standalone Company Selection
    const [standaloneCompanyId, setStandaloneCompanyId] = useState<string>('');

    // Determine effective company (Project linked OR Standalone selected)
    const effectiveCompany = company || companies?.find(c => c.id === standaloneCompanyId) || null;

    useEffect(() => {
        if (docToEdit && docToEdit.id !== lastEditedId) {
            // Logic moved from handleEditDocument
            const { DOCUMENT_TEMPLATES } = require('@/lib/templates');
            const template = DOCUMENT_TEMPLATES.find((t: DocumentTemplate) => t.id === docToEdit.templateId);

            if (template) {
                setSelectedTemplate(template);
                setInitialFormData(docToEdit.data);
                setView('form');
                setLastEditedId(docToEdit.id);
            }
        }
    }, [docToEdit, lastEditedId]);

    const handleSelectTemplate = (template: DocumentTemplate) => {
        if (!effectiveCompany && !project) {
            // Optional: Alert user to select a company if mandatory, but we can let them fill manually too.
            // But for automation, selecting is better.
        }
        setSelectedTemplate(template);
        setInitialFormData({}); // Reset form data for new doc
        setView('form');
    };

    const handleBack = () => {
        if (view === 'form') {
            setView('selector');
            setSelectedTemplate(null);
            setInitialFormData({});
        } else if (onExit) {
            onExit();
        }
    };

    const handleSuccess = () => {
        setView('selector');
        setSelectedTemplate(null);
        setInitialFormData({});
        // Ideally we would trigger a refresh or toast here
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Button variant="link" onClick={handleBack} className="pl-0 text-muted-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {view === 'form' ? 'Voltar para Modelos' : (onExit ? 'Voltar ao Início' : 'Voltar')}
                </Button>
            </div>

            {!project && view === 'selector' && (
                <div className="bg-slate-50 p-4 rounded-lg border mb-6">
                    <div className="space-y-2">
                        <Label>Selecione a Empresa para o Documento</Label>
                        <Select value={standaloneCompanyId} onValueChange={setStandaloneCompanyId}>
                            <SelectTrigger className="w-full md:w-[400px] bg-white">
                                <SelectValue placeholder="Selecione uma empresa..." />
                            </SelectTrigger>
                            <SelectContent>
                                {companies?.map(c => (
                                    <SelectItem key={c.id} value={c.id}>{c.name} {c.razaoSocial ? `(${c.razaoSocial})` : ''}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">Isso preencherá automaticamente os dados da empresa nos documentos.</p>
                    </div>
                </div>
            )}

            {view === 'form' && selectedTemplate ? (
                <div>
                    <DocForm
                        template={selectedTemplate}
                        project={project}
                        company={effectiveCompany}
                        initialData={initialFormData} // Pass reused data
                        onCancel={handleBack}
                        onSuccess={handleSuccess}
                    />
                </div>
            ) : (
                <DocSelector
                    concessionaires={concessionaires}
                    states={states}
                    onSelectTemplate={handleSelectTemplate}
                />
            )}
        </div>
    );
}

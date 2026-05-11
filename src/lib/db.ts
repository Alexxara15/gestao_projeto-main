import { PrismaClient } from '../../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export type Company = {
    id: string;
    name: string; // Used as Nome Fantasia
    razaoSocial?: string | null; // Razão Social
    cnpj: string;
    address: string;
    techResp: string;
    email: string;
    phone: string;
};

export type State = {
    id: string;
    name: string;
    uf: string;
};

export type Concessionaire = {
    id: string;
    name: string;
    stateId: string;
    requiredDocs: string[]; // List of document names
};

export type Project = {
    id: string;
    number: string;
    companyId: string;
    stateId: string;
    concessionaireId: string;
    city: string;
    infraType: string;
    poleCount: number;
    status: 'PREPARATION' | 'SENT' | 'SIGNED';
    createdAt: string;
    documents: {
        id: string;
        name: string;
        required: boolean;
        completed: boolean;
    }[];
};

export type GeneratedDocument = {
    id: string;
    projectId: string | null; // Nullable for standalone docs
    templateId: string;
    templateName: string;
    data: Record<string, any>; // Snapshot of form data
    fileUrl?: string | null; // Simulated file path
    fileData?: string | null; // Base64 string for Vercel
    fileName?: string | null; // Real filename
    createdAt: string;
    version: number;
    createdBy: string; // 'User' for now
    context?: 'PROJECT' | 'STANDALONE' | null;
};

class Database {
    // Companies
    async getCompanies() { 
        return prisma.company.findMany(); 
    }
    
    async addCompany(company: Company) {
        return prisma.company.create({
            data: {
                id: company.id,
                name: company.name,
                razaoSocial: company.razaoSocial,
                cnpj: company.cnpj,
                address: company.address,
                techResp: company.techResp,
                email: company.email,
                phone: company.phone,
            }
        });
    }

    // States
    async getStates() { 
        return prisma.state.findMany(); 
    }
    
    async addState(state: State) {
        return prisma.state.create({
            data: {
                id: state.id,
                name: state.name,
                uf: state.uf,
            }
        });
    }

    // Concessionaires
    async getConcessionaires() { 
        return prisma.concessionaire.findMany(); 
    }
    
    async addConcessionaire(concessionaire: Concessionaire) {
        return prisma.concessionaire.create({
            data: {
                id: concessionaire.id,
                name: concessionaire.name,
                stateId: concessionaire.stateId,
                requiredDocs: concessionaire.requiredDocs,
            }
        });
    }
    
    async updateConcessionaire(id: string, updates: Partial<Concessionaire>) {
        return prisma.concessionaire.update({
            where: { id },
            data: {
                name: updates.name,
                stateId: updates.stateId,
                requiredDocs: updates.requiredDocs,
            }
        });
    }

    // Projects
    async getProjects() { 
        const projects = await prisma.project.findMany();
        return projects.map(p => ({
            ...p,
            status: p.status as Project['status'],
            createdAt: p.createdAt.toISOString(),
            documents: p.documents as unknown as Project['documents']
        }));
    }
    
    async addProject(project: Project) {
        const created = await prisma.project.create({
            data: {
                id: project.id,
                number: project.number,
                companyId: project.companyId,
                stateId: project.stateId,
                concessionaireId: project.concessionaireId,
                city: project.city,
                infraType: project.infraType,
                poleCount: project.poleCount,
                status: project.status,
                documents: project.documents as any,
            }
        });
        return {
            ...created,
            status: created.status as Project['status'],
            createdAt: created.createdAt.toISOString(),
            documents: created.documents as unknown as Project['documents']
        };
    }
    
    async updateProject(id: string, updates: Partial<Project>) {
        await prisma.project.update({
            where: { id },
            data: {
                number: updates.number,
                companyId: updates.companyId,
                stateId: updates.stateId,
                concessionaireId: updates.concessionaireId,
                city: updates.city,
                infraType: updates.infraType,
                poleCount: updates.poleCount,
                status: updates.status,
                documents: updates.documents as any,
            }
        });
    }
    
    async updateProjectStatus(id: string, status: Project['status']) {
        return this.updateProject(id, { status });
    }
    
    async deleteProject(id: string) {
        // Must delete generated documents first due to foreign key
        await prisma.generatedDocument.deleteMany({
            where: { projectId: id }
        });
        await prisma.project.delete({
            where: { id }
        });
    }

    // Generated Documents
    async getAllGeneratedDocuments() {
        const docs = await prisma.generatedDocument.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return docs.map(d => ({
            ...d,
            createdAt: d.createdAt.toISOString(),
            data: d.data as Record<string, any>,
            context: d.context as GeneratedDocument['context']
        }));
    }

    async getGeneratedDocuments(projectId: string) {
        const docs = await prisma.generatedDocument.findMany({
            where: { projectId },
            orderBy: { createdAt: 'desc' }
        });
        return docs.map(d => ({
            ...d,
            createdAt: d.createdAt.toISOString(),
            data: d.data as Record<string, any>,
            context: d.context as GeneratedDocument['context']
        }));
    }

    async addGeneratedDocument(doc: GeneratedDocument) {
        const created = await prisma.generatedDocument.create({
            data: {
                id: doc.id,
                projectId: doc.projectId,
                templateId: doc.templateId,
                templateName: doc.templateName,
                data: doc.data as any,
                fileUrl: doc.fileUrl,
                fileData: doc.fileData,
                fileName: doc.fileName,
                version: doc.version,
                createdBy: doc.createdBy,
                context: doc.context,
            }
        });
        return {
            ...created,
            createdAt: created.createdAt.toISOString(),
            data: created.data as Record<string, any>,
            context: created.context as GeneratedDocument['context']
        };
    }

    async getDocumentById(id: string) {
        const d = await prisma.generatedDocument.findUnique({
            where: { id }
        });
        if (!d) return undefined;
        return {
            ...d,
            createdAt: d.createdAt.toISOString(),
            data: d.data as Record<string, any>,
            context: d.context as GeneratedDocument['context']
        };
    }
}

export const db = new Database();

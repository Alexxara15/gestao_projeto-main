export type FieldType = 'text' | 'number' | 'date' | 'select' | 'textarea';

export interface TemplateField {
    id: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    options?: string[]; // For select type
    defaultValue?: string; // Can be a variable like {{project.city}}
}

export interface DocumentTemplate {
    id: string;
    name: string;
    type: 'Requerimento' | 'Projeto' | 'Termo' | 'Outros';
    description: string;
    concessionaireId: string; // Linked to specific utility company
    stateId?: string; // Optional, if specific to a state
    fields: TemplateField[];
    contentTemplate: string; // The text content with {{variables}}
    templateFile?: string; // Path to .docx template
}

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
    {
        id: 'enel-ce-solicitacao-01',
        name: 'Solicitação de Compartilhamento',
        type: 'Requerimento',
        description: 'Documento obrigatório para início de processo na Enel Ceará.',
        concessionaireId: '3', // Enel CE
        stateId: '3', // CE
        templateFile: 'public/templates/enel/ce/modelo_base_solicitacao_compartilhamento_enel_ce.docx',
        fields: [
            { id: 'municipio', label: 'Município', type: 'text', required: true, defaultValue: '{{project.city}}' },
            { id: 'data_documento', label: 'Data do Documento', type: 'date', required: true, defaultValue: '{{today}}' },
            { id: 'representante_nome', label: 'Nome do Representante', type: 'text', required: true, defaultValue: '{{company.techResp}}' },
            { id: 'representante_cargo', label: 'Cargo do Representante', type: 'text', required: true, placeholder: 'Ex: Sócio-Administrador' },
            { id: 'empresa_razao_social', label: 'Razão Social', type: 'text', required: true, defaultValue: '{{company.razaoSocial}}' },
            { id: 'empresa_cnpj', label: 'CNPJ', type: 'text', required: true, defaultValue: '{{company.cnpj}}' },
            { id: 'email_contato', label: 'E-mail de Contato', type: 'text', required: true, defaultValue: '{{company.email}}' },
            { id: 'endereco_correspondencia', label: 'Endereço para Correspondência', type: 'textarea', required: true, defaultValue: '{{company.address}}' }
        ],
        contentTemplate: ''
    },
    // EQUATORIAL TEMPLATES (Generic for MA, PI, GO, AL, PA)
    ...['101', '102', '103', '104', '105'].flatMap((cid) => [
        {
            id: `equatorial-solicitacao-${cid}`,
            name: 'Solicitação de Compartilhamento',
            type: 'Requerimento' as const,
            description: 'Solicitação padrão Equatorial.',
            concessionaireId: cid,
            templateFile: 'public/templates/equatorial/modelo_solicitacao_equatorial.docx',
            fields: [
                { id: 'municipio', label: 'Município', type: 'text' as const, required: true, defaultValue: '{{project.city}}' },
                { id: 'data_documento', label: 'Data do Documento', type: 'date' as const, required: true, defaultValue: '{{today}}' },
                { id: 'nome_razao_social', label: 'Razão Social', type: 'text' as const, required: true, defaultValue: '{{company.razaoSocial}}' },
                { id: 'nome_fantasia', label: 'Nome Fantasia', type: 'text' as const, required: false, placeholder: 'Opcional, se houver' },
                { id: 'empresa_cnpj', label: 'CNPJ', type: 'text' as const, required: true, defaultValue: '{{company.cnpj}}' },
                { id: 'empresa_endereco', label: 'Endereço Completo', type: 'textarea' as const, required: true, defaultValue: '{{company.address}}' },
                { id: 'empresa_representante', label: 'Nome do Representante', type: 'text' as const, required: true, defaultValue: '{{company.techResp}}' },
                { id: 'empresa_cargo', label: 'Cargo do Representante', type: 'text' as const, required: true, placeholder: 'Ex: Sócio-Administrador' },
                { id: 'empresa_email', label: 'E-mail', type: 'text' as const, required: true, defaultValue: '{{company.email}}' },
                { id: 'empresa_contato', label: 'Telefone/Contato', type: 'text' as const, required: true, defaultValue: '{{company.phone}}' }
            ],
            contentTemplate: ''
        },
        {
            id: `equatorial-procuracao-${cid}`,
            name: 'Procuração',
            type: 'Termo' as const,
            description: 'Procuração padrão Equatorial.',
            concessionaireId: cid,
            templateFile: 'public/templates/equatorial/modelo_procuracao_equatorial.docx',
            fields: [
                { id: 'nome_razao_social', label: 'Razão Social', type: 'text' as const, required: true, defaultValue: '{{company.razaoSocial}}' },
                { id: 'nome_endereco', label: 'Endereço da Empresa', type: 'textarea' as const, required: true, defaultValue: '{{company.address}}' },
                { id: 'empresa_cnpj', label: 'CNPJ', type: 'text' as const, required: true, defaultValue: '{{company.cnpj}}' },
                { id: 'texto_representante', label: 'Texto do Representante (Qualificação)', type: 'textarea' as const, required: true, placeholder: 'Ex: brasileiro, casado, engenheiro, portador do RG...' },
                { id: 'empresa_representante', label: 'Nome do Representante Legal', type: 'text' as const, required: true, defaultValue: '{{company.techResp}}' },
                { id: 'data_documento', label: 'Data do Documento', type: 'date' as const, required: true, defaultValue: '{{today}}' }
            ],
            contentTemplate: ''
        }
    ])
];

export function getTemplates(concessionaireId: string, stateId: string) {
    return DOCUMENT_TEMPLATES.filter(
        t => t.concessionaireId === concessionaireId && (!t.stateId || t.stateId === stateId)
    );
}

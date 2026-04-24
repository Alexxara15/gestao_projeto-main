'use server';

import { db, Company } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2), // Nome Fantasia
    razaoSocial: z.string().min(2), // Razão Social
    cnpj: z.string().min(14),
    address: z.string().min(5),
    techResp: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
});

export async function createCompany(prevState: any, formData: FormData) {
    const addressLine = formData.get('address') as string || '';

    const rawData = {
        name: formData.get('name'),
        razaoSocial: formData.get('razaoSocial'),
        cnpj: formData.get('cnpj'),
        address: addressLine,
        techResp: formData.get('techResp'),
        email: formData.get('email'),
        phone: formData.get('phone'),
    };

    const result = formSchema.safeParse(rawData);

    if (!result.success) {
        const errorMessages = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
        return { message: `Dados inválidos: ${errorMessages}` };
    }

    const newCompany: Company = {
        id: crypto.randomUUID(),
        name: result.data.name,
        razaoSocial: result.data.razaoSocial,
        cnpj: result.data.cnpj,
        address: result.data.address,
        techResp: result.data.techResp,
        email: result.data.email,
        phone: result.data.phone,
    };

    await db.addCompany(newCompany);
    revalidatePath('/', 'layout');
    redirect('/empresas');
}

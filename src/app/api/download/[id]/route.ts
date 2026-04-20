import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    
    if (!id) {
        return new NextResponse("Missing document ID", { status: 400 });
    }

    const doc = await db.getDocumentById(id);

    if (!doc || !doc.fileData) {
        // If fileData is missing, maybe it was generated before this patch
        return new NextResponse("Document not found or no file data available", { status: 404 });
    }

    const buffer = Buffer.from(doc.fileData, 'base64');

    const fileName = doc.fileName || 'Documento.docx';

    return new NextResponse(buffer, {
        status: 200,
        headers: {
            "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "Content-Disposition": `attachment; filename="${fileName}"`,
        },
    });
}

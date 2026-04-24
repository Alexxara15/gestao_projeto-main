import { db } from "./src/lib/db";

async function run() {
    try {
        console.log("Adding test company...");
        await db.addCompany({
            id: "test-id",
            name: "Test Company",
            razaoSocial: "Test Company LTDA",
            cnpj: "00000000000000",
            address: "Test Address",
            techResp: "Test Resp",
            email: "test@example.com",
            phone: "00000000000",
        });
        console.log("Success! File should be updated.");
    } catch (e) {
        console.error("Failed to add company:", e);
    }
}
run();

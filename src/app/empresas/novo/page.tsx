"use client";

import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createCompany } from "@/app/_actions/company-actions";
import { useState } from "react";
import { CityCombobox } from "@/components/ui/city-combobox";

const initialState = {
    message: '',
};

export default function NovaEmpresaPage() {
    const [state, formAction] = useFormState(createCompany, initialState);
    const [city, setCity] = useState("");

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/empresas">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h2 className="text-3xl font-bold tracking-tight">Nova Empresa</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Dados da Empresa</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="razaoSocial">Razão Social</Label>
                                <Input id="razaoSocial" name="razaoSocial" placeholder="Razão Social Ltda" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Fantasia (Principal)</Label>
                                <Input id="name" name="name" placeholder="Ex: TechSolutions Engenharia" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="cnpj">CNPJ</Label>
                                <Input id="cnpj" name="cnpj" placeholder="00.000.000/0001-00" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefone</Label>
                                <Input id="phone" name="phone" placeholder="(00) 00000-0000" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" name="email" type="email" placeholder="contato@empresa.com" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="techResp">Representante da Empresa</Label>
                            <Input id="techResp" name="techResp" placeholder="Nome do representante legal" required />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="address">Logradouro, Número, Bairro</Label>
                                <Input id="address" name="address" placeholder="Ex: Rua A, 123, Centro" required />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <Label>Cidade</Label>
                                <CityCombobox 
                                    value={city}
                                    onChange={setCity}
                                />
                                <input type="hidden" name="city" value={city} />
                            </div>
                        </div>

                        {state?.message && (
                            <p className="text-sm text-red-500">{state.message}</p>
                        )}

                        <Button type="submit" className="w-full">Cadastrar Empresa</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

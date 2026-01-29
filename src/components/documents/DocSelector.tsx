'use client';

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getTemplates, DocumentTemplate } from "@/lib/templates";

interface DocSelectorProps {
    concessionaires: { id: string, name: string, stateId?: string }[];
    states: { id: string, name: string, uf: string }[];
    onSelectTemplate: (template: DocumentTemplate) => void;
}

export function DocSelector({ concessionaires, states, onSelectTemplate }: DocSelectorProps) {
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedConc, setSelectedConc] = useState<string>('');
    const [availableTemplates, setAvailableTemplates] = useState<DocumentTemplate[]>([]);

    // Filter concessionaires by selected state
    const filteredConcessionaires = concessionaires.filter(c => c.stateId === selectedState || !c.stateId); // !stateId checks if it's generic? Our schema implies strict stateId.

    // Reset concessionaire when state changes
    useEffect(() => {
        setSelectedConc('');
    }, [selectedState]);

    useEffect(() => {
        if (selectedConc && selectedState) {
            const temps = getTemplates(selectedConc, selectedState);
            setAvailableTemplates(temps);
        } else {
            setAvailableTemplates([]);
        }
    }, [selectedConc, selectedState]);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Estado (UF)</Label>
                        <Select onValueChange={setSelectedState} value={selectedState}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                {states.map((state) => (
                                    <SelectItem key={state.id} value={state.id}>
                                        {state.name} ({state.uf})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Concessionária</Label>
                        <Select onValueChange={setSelectedConc} value={selectedConc} disabled={!selectedState}>
                            <SelectTrigger>
                                <SelectValue placeholder={!selectedState ? "Selecione o Estado primeiro" : "Selecione a Concessionária"} />
                            </SelectTrigger>
                            <SelectContent>
                                {filteredConcessionaires.map((conc) => (
                                    <SelectItem key={conc.id} value={conc.id}>
                                        {conc.name}
                                    </SelectItem>
                                ))}
                                {filteredConcessionaires.length === 0 && selectedState && (
                                    <div className="p-2 text-sm text-muted-foreground text-center">Nenhuma concessionária encontrada</div>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {availableTemplates.length > 0 && (
                <div className="space-y-4">
                    <Label className="text-base font-semibold">Documentos Disponíveis</Label>
                    <div className="grid gap-3">
                        {availableTemplates.map(t => (
                            <Card key={t.id} className="cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group" onClick={() => onSelectTemplate(t)}>
                                <CardContent className="p-4 flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-blue-900 group-hover:text-blue-700">{t.name}</div>
                                        <div className="text-sm text-muted-foreground mt-1">{t.description}</div>
                                    </div>
                                    <Button size="sm" variant="outline" className="group-hover:bg-blue-50">Gerar</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {selectedConc && availableTemplates.length === 0 && (
                <div className="p-8 text-center text-muted-foreground border-2 border-dashed rounded-lg bg-slate-50">
                    Nenhum documento configurado para esta concessionária.
                </div>
            )}
        </div>
    );
}

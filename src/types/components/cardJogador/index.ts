import type { ChipProps } from "@mui/material";
import { FichaClasse } from "../../dtos/ficha/ficha.dto";

export interface CardJogadorProps {
    nome: string;
    avatar: string;
    personagem: string;
    classe: FichaClasse;
    vidas: number;
    vidasTotal: number;
    experiencia: number;
    pontos: number;
}

export const ClassesCores: Record<FichaClasse, ChipProps["color"]> = {
    [FichaClasse.guerreiro]: "secondary",
    [FichaClasse.mago]: "purple",
    [FichaClasse.arqueiro]: "primary",
    [FichaClasse.paladino]: "gold",
    [FichaClasse.bardo]: "red"
}
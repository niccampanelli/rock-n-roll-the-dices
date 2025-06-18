import type { ChipProps } from "@mui/material";

export interface CardJogadorProps {
    nome: string;
    avatar: string;
    personagem: string;
    classe: CardJogadorClasses;
    vidas: number;
    vidasTotal: number;
    experiencia: number;
    pontos: number;
}

export type CardJogadorClasses = "guerreiro" | "mago" | "arqueiro" | "paladino" | "bardo";

export const ClassesCores: Record<CardJogadorClasses, ChipProps["color"]> = {
    guerreiro: "secondary",
    mago: "purple",
    arqueiro: "primary",
    paladino: "gold",
    bardo: "red"
}
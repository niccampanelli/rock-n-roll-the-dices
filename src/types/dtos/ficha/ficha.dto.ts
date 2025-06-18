export interface FichaDto {
    id: string;
    nome: string;
    avatar: string;
    personagem: string;
    classe: FichaClasse;
    historia: string;
    vidas: number;
    vidasTotal: number;
    magia: number;
    experiencia: number;
    itens: string[];
    golpes: string[];
    tiposDano: string[];
    forca: number;
    habilidade: number;
    resistencia: number;
    armadura: number;
    poder: number;
    pontos: number;
}

export enum FichaClasse {
    guerreiro,
    mago,
    arqueiro,
    paladino,
    bardo
}

export const FichaClasseLabels: Record<FichaClasse, string> = {
    [FichaClasse.guerreiro]: 'Guerreiro',
    [FichaClasse.mago]: 'Mago',
    [FichaClasse.arqueiro]: 'Arqueiro',
    [FichaClasse.paladino]: 'Paladino',
    [FichaClasse.bardo]: 'Bardo'
}
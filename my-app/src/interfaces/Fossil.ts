import { Paleontologo } from "./Paleontologo";

export interface Fossil{
    id?: string;
    nome: string;
    nomeCientifico: string;
    localizacaoDescoberta: string;
    tipoFossil: string;
    especiaOrganismo: string;
    condicaoPreservacao: string;
    epocaGeologica: string;
    paleontologoId: number;
    adicionadoEm?: Date;
}
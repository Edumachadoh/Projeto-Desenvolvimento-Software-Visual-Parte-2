import { Arqueologo } from "./Arqueologo";

export interface Artefato {
    id?: string;
    nome: string;
    periodo: string;
    civilizacaoDeOrigem: string;
    funcionalidade: string;
    dimensao: string;
    material: string;
    arqueologoId: number;
    adicionadoEm?: string;
}
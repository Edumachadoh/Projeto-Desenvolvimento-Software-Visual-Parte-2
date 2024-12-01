import { Arqueologo } from "./Arqueologo";

export interface Artefato {
    id?: string;
    nome: string;
    periodo: string;
    civilizacaoOrigem: string;
    funcionalidade: string;
    dimensao: string;
    material: string;
    arqueologoId: number,
    adicionadoEm?: Date
}
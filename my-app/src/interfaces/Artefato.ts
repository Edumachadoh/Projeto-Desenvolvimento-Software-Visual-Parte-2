import { Arqueologo } from "./Arqueologo";

export interface Artefato extends Arqueologo{
    id?: string;
    nome: string;
    periodo: string;
    civilizacaoDeOrigem: string;
    funcionalidade: string;
    dimensao: string;
    material: string;
}
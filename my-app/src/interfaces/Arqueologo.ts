import { FormacaoAcademica } from "./FormacaoAcademica";

export interface Arqueologo extends FormacaoAcademica{
    id?: string;
    nome: string;
    cpf : string;
    dataNascimento: string;
}
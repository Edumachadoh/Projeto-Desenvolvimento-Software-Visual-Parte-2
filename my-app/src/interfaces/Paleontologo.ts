import { FormacaoAcademica } from "./FormacaoAcademica";

export interface Paleontologo extends FormacaoAcademica{
    id?: string;
    nome: string;
    cpf : string;
    dataNascimento: string;
    anosExperiencia: string;
    idMatricula: number;
    adicionadoEm?: Date
}
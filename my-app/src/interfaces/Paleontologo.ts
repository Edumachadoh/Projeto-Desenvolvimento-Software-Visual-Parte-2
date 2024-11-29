import { FormacaoAcademica } from "./FormacaoAcademica";

export interface Paleontologo {
    id?: string;
    nome: string;
    cpf : string;
    dataNascimento: string;
    anosExperiencia: string;
    idMatricula: number;
    areaEspecializacaoId: number,
    adicionadoEm?: Date
}
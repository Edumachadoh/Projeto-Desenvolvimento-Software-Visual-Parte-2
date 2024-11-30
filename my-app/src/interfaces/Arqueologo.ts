import { FormacaoAcademica } from './FormacaoAcademica';
export interface Arqueologo {
    id?: string;
    nome: string;
    cpf : string;
    dataNascimento: string;
    anosExperiencia: string;
    idRegistroProfissional: number,
    formacaoAcademicaId: number,
    formacaoAcademica?: FormacaoAcademica;
    adicionadoEm?: Date
}
import { AreaEspecializacao } from "./AreaEspecializacao";

export interface Paleontologo {
    id?: string;
    nome: string;
    cpf : string;
    dataNascimento: string;
    anosExperiencia: number;
    idMatricula: number;
    areaEspecializacaoId: number,
    areaEspecializacao?: AreaEspecializacao,
    adicionadoEm?: Date
}
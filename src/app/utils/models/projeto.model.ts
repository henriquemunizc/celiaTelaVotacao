import { CategoriaModel } from './categoria.model';

export interface ProjetoModel {
    id: number;
    dt_entrada: Date;
    categoria: CategoriaModel;
    nome: string;
    participantes: string;
    dadosParticipantes: string;
    descricao: string;
    objetivos: string;
    pubilcoAlvo: string;
    recursosEnvolvidos: string;
    resultados: string;

}

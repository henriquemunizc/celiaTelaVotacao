import { environment } from '../environments/environment';

const votacao = environment.votacao;

export const ApiUrls = {

  votacao: {
    getProjetos(): string {
      return votacao + 'projeto';
    },
    saveProjetos(): string {
      return votacao + 'projeto/';
    },
    getCategorias(): string {
      return votacao + 'categoria';
    },
    getProjetosIdCategoria(idCategoria: number): string {
      return votacao + 'projeto?categoria=' + idCategoria;
    },
    getProjetoId(idProjeto: number): string {
      return votacao + 'projeto?id=' + idProjeto;
    }
  },


};

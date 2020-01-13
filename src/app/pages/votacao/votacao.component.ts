import { ProjetoModel } from './../../utils/models/projeto.model';
import { CategoriaModel } from './../../utils/models/categoria.model';
import { VotacaoService } from './../../utils/services/votacao.service';

import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DetalheDadosProjetoComponent } from './detalhe-dados-projeto/detalhe-dados-projeto.component';


@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.scss'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class VotacaoComponent implements OnInit {

  projetos: ProjetoModel[];
  categorias: CategoriaModel[];
  projetosSelecionados: ProjetoModel[];
  projetoSelecionado: ProjetoModel;
  projEmBranco: ProjetoModel;
  projetoVotado: ProjetoModel;
  displayedColumns: string[] = ['select', 'descricao'];

  projetoExpandido: ProjetoModel | null;

  constructor(
    private votacaoService: VotacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCategorias();
    this.projetosSelecionados = [];
    this.projEmBranco = null;

  }




  getProjetosIdCategoria(categoria: CategoriaModel) {
    this.projetos = [];
    this.votacaoService.getProjetosIdCategoria(categoria).subscribe(
      data => {
        this.projetos = data;
        // this.projetoSelecionado1 = this.projetos[0];
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  getProjetoId(projeto: ProjetoModel) {
    this.projetosSelecionados[0] = null;
    this.votacaoService.getProjetoId(projeto).subscribe(
      data => {
        this.projetoSelecionado = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  // getProjetos() {
  //   this.votacaoService.getProjetos().subscribe(
  //     data => {
  //       this.projetos = data;
  //         }, error => {
  //       console.log(error);
  //     });
  // }

  getCategorias() {
    this.votacaoService.getCategorias().subscribe(
      data => {
        this.categorias = data;
      }, error => {
        console.log(error);
      });

  }

  modalDadosProjeto(projeto: ProjetoModel): void {
    console.log(projeto);
    const dialogRef = this.dialog.open(DetalheDadosProjetoComponent, {
      data: projeto
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}

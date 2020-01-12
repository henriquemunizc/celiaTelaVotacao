import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { VotacaoModule } from '../votacao/votacao.module';



@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    VotacaoModule

  ],
})
export class PaginaInicialModule { }

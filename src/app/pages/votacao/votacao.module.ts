import { VotacaoService } from './../../utils/services/votacao.service';
import { VotacaoComponent } from './votacao.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule, MatRadioModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { DetalheDadosProjetoComponent } from './detalhe-dados-projeto/detalhe-dados-projeto.component';




@NgModule({
  declarations: [
    VotacaoComponent,
    DetalheDadosProjetoComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // GerirCompetenciasRoutingModule
    CdkTableModule,
    CdkTreeModule,
    MatIconModule,
    DragDropModule,
    MatTreeModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,


  ],
  exports: [
    VotacaoComponent,
  ],
  entryComponents: [
    DetalheDadosProjetoComponent
  ],
  providers: [
    VotacaoService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VotacaoModule { }

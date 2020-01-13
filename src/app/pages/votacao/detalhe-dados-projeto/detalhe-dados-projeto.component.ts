import { Component, Inject } from '@angular/core';
import { ProjetoModel } from 'src/app/utils/models/projeto.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detalhe-dados-projeto',
  templateUrl: './detalhe-dados-projeto.component.html',
  styleUrls: ['./detalhe-dados-projeto.component.scss'],
})
export class DetalheDadosProjetoComponent {


  constructor(
    public dialogRef: MatDialogRef<DetalheDadosProjetoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjetoModel) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

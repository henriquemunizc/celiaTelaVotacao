import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { VotacaoComponent } from './pages/votacao/votacao.component';


const routes: Routes = [
  { path: 'votacao', component: VotacaoComponent },
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: '**', component: PaginaInicialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

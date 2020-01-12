import { VotacaoModule } from './pages/votacao/votacao.module';
import { PaginaInicialModule } from './pages/pagina-inicial/pagina-inicial.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateService } from './utils/services/date.service';
import { NgModule } from '@angular/core';
import { ToolbarModule } from './pages/toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Meus modulos
    ToolbarModule,
    PaginaInicialModule,
    VotacaoModule

  ],
  providers: [
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppCompartilhadoModule} from './app-compartilhado/app-compartilhado.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './layout/navbar/menu.component';
import { LoginComponent } from './login/login.component';
import { Guardarota } from './guardarota/guardarota.component';
import { LoginService } from './servicos/login.service';
import { BarraCentralComponent } from './layout/barra-central/barra-central.component';
import { InicialComponent } from './layout/inicial/inicial.component';
import { PacienteComponent } from './modulos/paciente/paciente.component';
import { FinanceiroComponent } from './modulos/financeiro/financeiro.component';
import { CadastroComponent } from './modulos/paciente/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    BarraCentralComponent,
    InicialComponent,
    PacienteComponent,
    FinanceiroComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCompartilhadoModule
  ],
  providers: [
    LoginService,
    Guardarota],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './layout/navbar/menu.component';
import { Guardarota } from './guardarota/guardarota.component';
import { InicialComponent } from './layout/inicial/inicial.component';
import { PacienteComponent } from './modulos/paciente/paciente.component';
import { AdministrativoComponent } from './modulos/administrativo/administrativo.component';
import { FinanceiroComponent } from './modulos/financeiro/financeiro.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: MenuComponent, canActivate: [Guardarota], children: [
      { path: 'inicio', component: InicialComponent, canActivate: [Guardarota] },
      { path: 'pacientes', component: PacienteComponent, canActivate: [Guardarota] },
      { path: 'administrativo', component: AdministrativoComponent, canActivate: [Guardarota]},
      { path: 'financeiro', component: FinanceiroComponent, canActivate: [Guardarota]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

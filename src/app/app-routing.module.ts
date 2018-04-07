import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './layout/navbar/menu.component';
import { Guardarota } from './guardarota/guardarota.component';
import { InicialComponent } from './layout/inicial/inicial.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',component: MenuComponent, canActivate: [Guardarota], children: [
      { path: 'inicio', component: InicialComponent, canActivate: [Guardarota] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

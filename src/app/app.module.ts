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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent
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

import { LoginModel } from "./../login/login.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  usuarioAutenticado = new LoginModel();
  public logado: string;

  constructor(private router: Router) {}

  public usuarioLogado() {
    return window.sessionStorage.getItem("usuarioLogado");
  }
  public logarUsuario(dadosUsuario): void {
    this.logado = "true";
    window.sessionStorage.setItem("usuarioLogado", "true");
    this.usuarioAutenticado = dadosUsuario;
  }
  public deslogarUsuario(): void {
    this.logado = "false";
    window.sessionStorage.setItem("usuarioLogado", "false");
    this.router.navigate([""]);
  }
}

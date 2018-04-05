import { LoginModel } from './../login/login.model';
import {
    Injectable
  } from '@angular/core';
  import {
    Http,
    Response
  } from '@angular/http';
  import 'rxjs/add/operator/map';
  import {
    HttpClient,
    HttpResponse
  } from '@angular/common/http';
  import {
    Observable
  } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    usuarioAutenticado = new LoginModel();
    public logado: string;

    constructor() {}

   public  usuarioLogado() {
         return window.localStorage.getItem('usuarioLogado');
    }
   public logarUsuario(dadosUsuario) {
       this.logado = 'true';
       window.localStorage.setItem('usuarioLogado', 'true');
       this.usuarioAutenticado = dadosUsuario;

   }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../servicos/login.service';
import { LoginModel } from './login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit {

  usuarioIncorretoNome: string;
  usuarioIncorreto = false;
  usuario = new LoginModel();

  usuariosCadastrados = [{
    usuario: 'admin', senha: 'admin'
  },
  { usuario: 'user', senha: 'user' },
  {
    usuario: 'teste', senha: 'teste'
  }];

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    if (window.sessionStorage.getItem('usuarioLogado') === 'true') {
      this.router.navigate(['home']);
    }
    this.usuarioIncorreto = false;
  }

  logarUsuario() {
    for (let i = 0; i < this.usuariosCadastrados.length; i++) {
      if (Object.is(this.usuario.usuario, this.usuariosCadastrados[i].usuario)
        && Object.is(this.usuario.senha, this.usuariosCadastrados[i].senha)) {
        this.usuarioIncorreto = false;
        this.loginService.logarUsuario(this.usuario);
        this.router.navigate(['home']);
      } else {
        this.usuarioIncorretoNome = this.usuario.usuario;
        this.usuarioIncorreto = true;
      }
    }
  }


}

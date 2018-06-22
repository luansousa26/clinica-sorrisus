import { Component, OnInit, trigger, state, transition, animate, style, keyframes } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../servicos/login.service';
import { LoginModel } from './login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.scss'],
  animations: [
    // coloca a animação apenas onde possuir a diretiva [@container]="currentState" currentState 
    // ativa ou inativa a animação
    trigger("container", [
      state('active', style({})),
      transition("inactive => active", [
        animate(1000, keyframes([
          style({
            transition: '.3s',
            transform: 'rotateX(60deg)',
          }),
          style({
            transition: '.6s',
            transform: 'rotateY(40deg)',
          })
        ]))
      ]),
    ]),
  ]
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

  // variavel para controlar a animação
  currentState: any;
  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.currentState = "inactive";
    setTimeout(() => {
      this.currentState = "active";
    }, 500);
    if (window.sessionStorage.getItem('usuarioLogado') === 'true') {
      this.router.navigate(['home/inicio']);
    }
    this.usuarioIncorreto = false;
  }

  logarUsuario() {
    for (let i = 0; i < this.usuariosCadastrados.length; i++) {
      if (Object.is(this.usuario.usuario, this.usuariosCadastrados[i].usuario)
        && Object.is(this.usuario.senha, this.usuariosCadastrados[i].senha)) {
        this.usuarioIncorreto = false;
        this.loginService.logarUsuario(this.usuario);
        this.router.navigate(['home/inicio']);
      } else {
        this.usuarioIncorretoNome = this.usuario.usuario;
        this.usuarioIncorreto = true;
      }
    }
  }


}

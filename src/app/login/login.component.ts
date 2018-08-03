import { Component, OnInit, trigger, state, transition, animate, style, keyframes, OnDestroy } from '@angular/core';
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
export class LoginComponent implements OnInit, OnDestroy {

  usuarioIncorretoNome: string;
  usuarioIncorreto = false;
  usuario = new LoginModel();
  imagensDisponiveis: any[] = [];
  usuariosCadastrados = [{
    usuario: 'admin', senha: 'admin'
  },
  { usuario: 'user', senha: 'user' },
  {
    usuario: 'teste', senha: 'teste'
  }];

  controlador = -1;
  controle: any;

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

    this.imagensDisponiveis = [
      'assets/background1.jpg',
      'assets/background2.jpg',
      'assets/background3.jpg',
      'assets/background.jpg',
    ];
    this.controle = setInterval(() => {this.displayNextImage(); }, 7000);
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
  displayNextImage() {
    (<HTMLImageElement>document.getElementById('body')).style.opacity = '0.1';
    (<HTMLImageElement>document.getElementById('body')).style.transition = 'opacity 1s linear';
    setTimeout(() => {
      this.controlador = (this.controlador === this.imagensDisponiveis.length - 1) ? 0 : this.controlador + 1;
      (<HTMLImageElement>document.getElementById('body')).style.backgroundImage = `url('${ this.imagensDisponiveis[this.controlador]}')`;
      (<HTMLImageElement>document.getElementById('body')).style.opacity = '1';
    }, 600);
  }
  ngOnDestroy() {
    clearInterval(this.controle);
    }

}

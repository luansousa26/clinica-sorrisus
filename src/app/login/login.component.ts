import {
  Component,
  OnInit,
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes,
  OnDestroy
} from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./../servicos/login.service";
import { LoginModel } from "./login.model";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.scss"],
  animations: [
    // coloca a animação apenas onde possuir a diretiva [@container]='currentState' currentState
    // ativa ou inativa a animação
    trigger("container", [
      state(
        "inactive",
        style({
          transition: "1s",
          opacity: "0",
          marginTop: "-400px"
        })
      ),
      transition("inactive => active", [
        animate(
          3000,
          keyframes([
            style({
              transition: "2s",
              opacity: "1",
              marginTop: "80px"
            })
          ])
        )
      ])
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  usuarioIncorretoNome: string;
  usuarioIncorreto = false;
  usuario = new LoginModel();
  imagensDisponiveis: any[] = [];
  usuariosCadastrados = [
    {
      usuario: "admin",
      senha: "admin"
    },
    { usuario: "user", senha: "user" },
    {
      usuario: "teste",
      senha: "teste"
    }
  ];

  controlador = -1;
  controle: any;

  // variavel para controlar a animação
  currentState: any;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.currentState = "inactive";
    setTimeout(() => {
      this.currentState = "active";
    }, 500);
    if (window.sessionStorage.getItem("usuarioLogado") === "true") {
      this.router.navigate(["home/inicio"]);
    }
    this.usuarioIncorreto = false;

    this.imagensDisponiveis = [
      "assets/background1.jpg",
      "assets/background2.jpg",
      "assets/background3.jpg",
      "assets/background.jpg"
    ];
    this.controle = setInterval(() => {
      this.displayNextImage();
    }, 7000);
  }

  public logarUsuario(): void {
    this.usuariosCadastrados.map(users => {
      if (
        Object.is(this.usuario.usuario, users.usuario) &&
        Object.is(this.usuario.senha, users.senha)
      ) {
        this.permitirLogin();
        document.getElementById('body').style.backgroundImage = 'none';
      } else {
        this.bloquearLogin();
      }
    });
  }

  permitirLogin(): void {
    this.usuarioIncorreto = false;
    this.loginService.logarUsuario(this.usuario);
    this.router.navigate(["home/inicio"]);
  }

  bloquearLogin(): void {
    this.usuarioIncorretoNome = this.usuario.usuario;
    this.usuarioIncorreto = true;
  }
  displayNextImage() {
    (<HTMLImageElement>document.getElementById("body")).style.opacity = "0.5";
    (<HTMLImageElement>document.getElementById("body")).style.transition =
      "opacity 1s linear";
    setTimeout(() => {
      this.controlador =
        this.controlador === this.imagensDisponiveis.length - 1
          ? 0
          : this.controlador + 1;
      (<HTMLImageElement>(
        document.getElementById("body")
      )).style.backgroundImage = `url('${
        this.imagensDisponiveis[this.controlador]
      }')`;
      (<HTMLImageElement>document.getElementById("body")).style.opacity = "1";
    }, 600);
  }
  ngOnDestroy() {
    clearInterval(this.controle);
  }
}

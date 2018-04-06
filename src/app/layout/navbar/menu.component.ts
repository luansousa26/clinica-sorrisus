import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicos/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  titulo = 'Clinica Sorrisus';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  deslogar() {
    this.loginService.deslogarUsuario();
  }
}

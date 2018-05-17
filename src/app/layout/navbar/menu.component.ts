import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicos/login.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['navbar.scss']
})
export class MenuComponent implements OnInit {
  titulo = 'Clínica Sorrisus';
  constructor(private loginService: LoginService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deslogar() {
    this.snackBar.open('Saindo','...', {
      duration: 2000,
    });
    this.loginService.deslogarUsuario();
  }
}

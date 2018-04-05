import { Component, OnInit, Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LoginService } from './../servicos/login.service';

@Injectable()
export class Guardarota implements CanActivate  {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.usuarioLogado() === 'true' ) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}

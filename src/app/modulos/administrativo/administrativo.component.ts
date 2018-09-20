import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['administrativo.scss']
})
export class AdministrativoComponent implements OnInit {

  controlaCalendario: boolean;
  controlaGrafico: boolean;
  constructor() { }

  ngOnInit() {
  }
 public visualizarCalendario(): void {
    if (this.controlaCalendario === true) {
      this.controlaCalendario = false;
    } else {
      this.controlaGrafico = false;
      this.controlaCalendario = true;
    }
  }


  visualizarGrafico() {
    if (this.controlaGrafico === true) {
      this.controlaGrafico = false;
    } else {
      this.controlaCalendario = false;
      this.controlaGrafico = true;
    }
  }
}

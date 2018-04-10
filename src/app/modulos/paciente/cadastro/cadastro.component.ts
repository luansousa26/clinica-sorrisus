import { Component, OnInit } from '@angular/core';
import { PacienteModel } from './../models/paciente.model';
import { EnderecoModel } from '../models/endereco.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['cadastro.scss']
})
export class CadastroComponent implements OnInit {

  paciente: PacienteModel;

  constructor() { }

  ngOnInit() {
    this.paciente = new PacienteModel();
    this.paciente.endereco = new EnderecoModel();
  }

}

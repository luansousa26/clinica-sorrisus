import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PesquisaService } from './pesquisa.service';
import { PacienteModel } from '../models/paciente.model';
import { PacienteComponent } from '../paciente.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styles: ['./../cadastro/cadastro.scss']
})
export class PesquisaComponent implements OnInit {

  elementos: PacienteModel[] = [];
  dataSource: any;
  arrayTemp: PacienteModel[] = [];
  visualizarSideBar: boolean;
  displayedColumns = ['id', 'nome', 'profissao'];
  paciente: PacienteModel = new PacienteModel();
  situacaoCpf: any;
  constructor(private pesquisaService: PesquisaService) {
  }
  ngOnInit() {
    this.getUsuarios();
  }
  openDialog() {
    
  }

  getUsuarios() {
    this.pesquisaService.getUsuarios().subscribe((usuarios: PacienteModel[]) => {
      this.elementos = usuarios;
      for (const valores in this.elementos) {
        const paciente = new PacienteModel();
        paciente.id = this.elementos[valores].id;
        paciente.nomeCompleto = this.elementos[valores].nomeCompleto;
        paciente.profissao = this.elementos[valores].profissao;
        this.arrayTemp.push(paciente);
      }
      this.dataSource = new MatTableDataSource(this.arrayTemp);
    });
  }

  linhaSelecionada(linha) {
    for (const paciente in this.elementos) {
      if (Object.is(this.elementos[paciente].id, linha.id)) {
        this.paciente = this.elementos[paciente];
        this.situacaoCpf = true;
        this.visualizarSideBar = true;
        break;
      }
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  // Valida se o CPF está correto
  validarCpf(cpf: string) {
    let soma = 0;
    let resto;


    // deixa apenas os numeros
    cpf.replace(/[^0-9]+/g, '');

    if (cpf === '') {
        this.situacaoCpf = false;
        return false;
    }

    // Primeiro digito
    if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf == '33333333333' ||
     cpf === '44444444444' || cpf === '55555555555' ||
     cpf === '66666666666' || cpf === '77777777777' ||
     cpf === '88888888888' || cpf === '99999999999') {

        this.situacaoCpf = false;
        return false;

    }
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
    }

    if ((resto === 10) || (resto === 11)) {
        resto = 0;

    }
    if (resto !== parseInt(cpf.substring(9, 10))) {

        this.situacaoCpf = false;
        return false;
    }

    // Segundo digito
    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
        this.situacaoCpf = true;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        this.situacaoCpf = false;
        return false;
    }

    this.situacaoCpf = true;
    return true;
}
}


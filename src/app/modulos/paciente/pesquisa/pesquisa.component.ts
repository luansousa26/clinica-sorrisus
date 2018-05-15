import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PesquisaService } from './pesquisa.service';
import { PacienteModel } from '../models/paciente.model';
import { PacienteComponent } from '../paciente.component';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styles: []
})
export class PesquisaComponent {
  elementos: PacienteModel[] = [];
  dataSource: any;
  arrayTemp: PacienteModel[] = [];
  pacienteComp = new PacienteComponent();
  @Output() liberarLista = new EventEmitter();

  displayedColumns = ['id', 'nome', 'profissao'];
  constructor(private pesquisaService: PesquisaService) {
    this.getUsuarios();
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
        this.pesquisaService.paciente = this.elementos[paciente];
        this.pacienteComp.liberarListagem();
        break;
      }
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

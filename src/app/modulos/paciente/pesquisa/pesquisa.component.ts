import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PesquisaService } from './pesquisa.service';
import { PacienteModel } from '../models/paciente.model';
import { PacienteComponent } from '../paciente.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styles: []
})
export class PesquisaComponent implements OnInit {

  elementos: PacienteModel[] = [];
  dataSource: any;
  arrayTemp: PacienteModel[] = [];

  displayedColumns = ['id', 'nome', 'profissao'];
  constructor(private pesquisaService: PesquisaService,
              public dialog: MatDialog) {
  }
  ngOnInit() {
    this.getUsuarios();
  }
  openDialog() {
    let dialogRef = this.dialog.open(PesquisaModalComponent, {
      width: '400px'
    });
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
        this.openDialog();
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
@Component({
  selector: 'app-pesquisa-modal',
  templateUrl: './pesquisa-modal.component.html',
  styles: []
})
export class PesquisaModalComponent {

  constructor(public dialogRef: MatDialogRef<PesquisaModalComponent>) {

  }
}

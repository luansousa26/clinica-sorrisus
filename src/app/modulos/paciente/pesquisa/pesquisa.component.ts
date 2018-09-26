import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { PesquisaService } from "./pesquisa.service";
import { PacienteModel } from "../models/paciente.model";
import { PacienteComponent } from "../paciente.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { CadastroService } from "../cadastro/cadastro.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pesquisa",
  templateUrl: "./pesquisa.component.html",
  styles: ["./../cadastro/cadastro.scss"]
})
export class PesquisaComponent implements OnInit {
  elementos: PacienteModel[] = [];
  arrayTemp: PacienteModel[] = [];
  displayedColumns = ["id", "nome", "profissao"];

  pacienteAtualizacao: PacienteModel;
  paciente: PacienteModel = new PacienteModel();

  dataSource: any;
  visualizarSideBar: boolean;
  situacaoCpf: any;

  constructor(
    private pesquisaService: PesquisaService,
    public snackBar: MatSnackBar
  ) {
    this.pacienteAtualizacao = new PacienteModel();
  }
  ngOnInit() {
    this.getUsuarios();
  }

  private getUsuarios(): void {
    this.arrayTemp = [];
    this.pesquisaService
      .getUsuarios()
      .subscribe((usuarios: PacienteModel[]) => {
        this.elementos = usuarios;

        usuarios.map(elemento => {
          const paciente = new PacienteModel();
          paciente.id = elemento.id;
          paciente.nomeCompleto = elemento.nomeCompleto;
          paciente.profissao = elemento.profissao;
          this.arrayTemp.push(paciente);
        });
        this.dataSource = new MatTableDataSource(this.arrayTemp);
      });
  }

  public linhaSelecionada(linhaSelecionada: PacienteModel): void {
    this.pacienteAtualizacao = this.elementos.find(
      paciente => paciente.id === linhaSelecionada.id
    );
    this.visualizarSideBar = true;
  }

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public voltar(): void {
    this.pacienteAtualizacao = null;
    this.visualizarSideBar = false;
  }
}

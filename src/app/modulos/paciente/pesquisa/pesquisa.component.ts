import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PesquisaService } from './pesquisa.service';
import { PacienteModel } from '../models/paciente.model';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styles: []
})
export class PesquisaComponent {
  elementos : PacienteModel[] = [];
  dataSource : any;
  constructor(private pesquisaService :PesquisaService){
     this.getUsuarios();
  }

  getUsuarios() {
    this.pesquisaService.getUsuarios().subscribe((usuarios : PacienteModel[]) => {
      this.elementos = usuarios;
      this.dataSource = new MatTableDataSource(this.elementos);
    })
  }
  displayedColumns = ['id', 'nome', 'profissao'];
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}
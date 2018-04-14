import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PesquisaService } from './pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styles: []
})
export class PesquisaComponent {
  elementos : Elementos[] = [];
  dataSource : any;
  constructor(private pesquisaService :PesquisaService){
     this.getUsuarios();
  }

  getUsuarios() {
    this.pesquisaService.getUsuarios().subscribe((usuarios) => {
      this.elementos = usuarios['usuarios'];
      this.dataSource = new MatTableDataSource(this.elementos);
    })
  }
  displayedColumns = ['id', 'nome', 'idade', 'profissao'];
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}
export interface Elementos {
  id?: number;
  nome?: string;
  idade?: number;
  profissao?: string;
}
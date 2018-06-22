import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../../paciente/pesquisa/pesquisa.service';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styles: []
})
export class GraficoComponent implements OnInit {
 
  data: any;
  totalPacientes = 90;
  opcoesGrafico: any[] = [];
  tipoGrafico = 'doughnut';
  controlaGrafico = true;
  constructor(private pesquisaService: PesquisaService) {
   }

  ngOnInit() {
    this.getTotalPacientes();
    this.opcoesGrafico = [
      { label: 'Linhas', value:'line'},
      { label: 'Barras', value:'bar'},
      { label: 'Pizza', value:'pie'},
      { label: 'Área Polar', value:'polarArea'}
    ];
  }

  getTotalPacientes() {
    this.pesquisaService.getUsuarios().subscribe((pacientes: any[]) => {
      this.totalPacientes = pacientes.length;
      this.inicializaGrafico();
    });
  }
  inicializaGrafico() {
    this.data = {
      labels: ['Pacientes Cadastrados','B','C'],
      datasets: [
          {
              label: 'Gráfico',
              data: [this.totalPacientes, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }
  alterarGrafico() {
    this.controlaGrafico = false;
    setTimeout(() =>{
      this.controlaGrafico = true;
    }, 200);
  }
}

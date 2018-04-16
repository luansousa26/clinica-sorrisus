import { Component, OnInit } from '@angular/core';
import { PacienteModel } from './../models/paciente.model';
import { EnderecoModel } from '../models/endereco.model';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['cadastro.scss']
})
export class CadastroComponent implements OnInit {

  paciente: PacienteModel;
  str1 = '60a96f';
  str2 = '3c8ac5a0cbb277';
  str3 = '5gpolldsc999s02';
  str4 = 'bf4ef3a42df0';
  token = '90oop033c11120339www211';
  retorno: any;
  postRetorno: any;

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.paciente = new PacienteModel();
    this.paciente.endereco = new EnderecoModel();
  }

  salvarDados() {
      this.cadastroService.salvarPaciente(this.paciente).subscribe(resposta => {
          this.postRetorno = resposta;
          console.log(resposta);
      });
      alert('paciente Salvo!');
  }
  verificarCep() {
      if (this.paciente.endereco.cep !== undefined) {
          if (this.paciente.endereco.cep.includes('-')) {
              const cepV = /\-/gi;
              this.paciente.endereco.cep = this.paciente.endereco.cep.replace(cepV, '');
          }
          if (this.paciente.endereco.cep.length > 7) {
              this.cadastroService
                  .getCep(this.paciente.endereco.cep)
                  .subscribe((endereco) => {
                      this.paciente.endereco = endereco;
                  });
          }
      }
  }
  verificarCpf() {
      this.token = this.str1 + this.str2 + this.str4;
      if (this.paciente.cpf !== '') {
          if (this.paciente.cpf.includes('.')) {
              const cpfV = /\./gi;
              this.paciente.cpf = this.paciente.cpf.replace(cpfV, '');
              this.paciente.cpf = this.paciente.cpf.replace('-', '');
          }
          if (this.paciente.cpf.length > 10) {
              this.cadastroService.getValidarCpf(this.paciente.cpf, this.token).subscribe(resultado => {
                  this.retorno = resultado;
                  if (this.retorno.status === '1') {
                      this.paciente.cpf = this.retorno.data.number_formatted;
                  } else {
                      this.paciente.cpf = '';
                  }
              });
          }
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { PacienteModel } from './../models/paciente.model';
import { EnderecoModel } from '../models/endereco.model';
import { CadastroService } from './cadastro.service';
import { DadosClinicosModel } from '../models/dados-clinicos.model';

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
    flagMedicamento: boolean;

    constructor(private cadastroService: CadastroService) { }

    ngOnInit() {
        this.paciente = new PacienteModel();
        this.paciente.endereco = new EnderecoModel();
        this.paciente.dadosClinicos = new DadosClinicosModel();
    }

    salvarDados() {
        this.cadastroService.salvarPaciente(this.paciente).subscribe(resposta => {
            this.postRetorno = resposta;
        });
        alert('paciente Salvo!');
        console.log(this.paciente);
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
    verificaFlags(flag) {
        switch (flag.id) {
            case 'flagMedicamentoSim':
                this.paciente.dadosClinicos.flagMedicamento = 'S';
                break;
            case 'flagMedicamentoNao':
                this.paciente.dadosClinicos.flagMedicamento = 'N';
                break;
            case 'flagProblemaSim':
                this.paciente.dadosClinicos.flagProblemaSaude = 'S';
                break;
            case 'flagProblemaNao':
                this.paciente.dadosClinicos.flagProblemaSaude = 'N';
                break;
            case 'flagPressaoSim':
                this.paciente.dadosClinicos.flagPressao = 'S';
                break;
            case 'flagPressaoNao':
                this.paciente.dadosClinicos.flagPressao = 'N';
                break;
            case 'flagSensibilidadeSim':
                this.paciente.dadosClinicos.flagSensibilidade = 'S';
                break;
            case 'flagSensibilidadeNao':
                this.paciente.dadosClinicos.flagSensibilidade = 'N';
                break;
            case 'flagMasculino':
                this.paciente.sexo = 'M';
                break;
            case 'flagFeminino':
                this.paciente.sexo = 'F';
                break;
        }
    }
}

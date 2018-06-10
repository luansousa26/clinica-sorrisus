import { Component, OnInit, ViewChild } from '@angular/core';
import { PacienteModel } from './../models/paciente.model';
import { EnderecoModel } from '../models/endereco.model';
import { CadastroService } from './cadastro.service';
import { DadosClinicosModel } from '../models/dados-clinicos.model';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['cadastro.scss']
})
export class CadastroComponent implements OnInit {

    paciente: PacienteModel;
    retorno: any;
    postRetorno: any;
    flagMedicamento: boolean;
    situacaoCpf: boolean;
    @ViewChild('cadastroForm') cadastroForm : NgForm;

    constructor(private cadastroService: CadastroService,
                public snackBar: MatSnackBar,
                private router: Router) { }

    ngOnInit() {
        this.paciente = new PacienteModel();
        this.paciente.endereco = new EnderecoModel();
        this.paciente.dadosClinicos = new DadosClinicosModel();
    }
  
  // Valida se o CPF está correto
   validarCpf(cpf: string) {
    let soma = 0;
    let resto;

    if (cpf === '') {
        this.situacaoCpf = false;
        return false;
    } else {
        // deixa apenas os numeros
        cpf.replace(/[^0-9]+/g, '');
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

    salvarDados() {
        this.cadastroService.salvarPaciente(this.paciente).subscribe(resposta => {
            this.postRetorno = resposta;
            this.cadastroForm.resetForm();
            this.snackBar.open('Paciente Salvo com Sucesso!',' :D', {
                duration: 5000,
              });
            this.router.navigate(['/home']);
            setTimeout(() => {
                this.router.navigate(['home/pacientes']);
            }, 100);
            
        });
        
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

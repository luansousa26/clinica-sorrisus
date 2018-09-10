import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PacienteModel } from './../models/paciente.model';
import { EnderecoModel } from '../models/endereco.model';
import { CadastroService } from './cadastro.service';
import { DadosClinicosModel } from '../models/dados-clinicos.model';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidacaoCPF, ValidacaoTipos } from '../../../shared/index';
@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['cadastro.scss']
})
export class CadastroComponent implements OnInit {
    validacoes = ValidacaoTipos;
    paciente: PacienteModel;
    retorno: any;
    postRetorno: any;
    flagMedicamento: boolean;
    situacaoCpf: boolean;
    focusoutCpf: boolean;

    @Input('pacienteAtualizacao') pacienteAtualizacao: PacienteModel;

    @ViewChild('cadastroForm') cadastroForm: NgForm;

    constructor(private cadastroService: CadastroService,
        public snackBar: MatSnackBar,
        private router: Router) {
        this.paciente = new PacienteModel();
        this.paciente.endereco = new EnderecoModel();
        this.paciente.dadosClinicos = new DadosClinicosModel();
    }

    ngOnInit() {
        if  (this.pacienteAtualizacao) {
            this.paciente = this.pacienteAtualizacao;
        }
    }

    public validarCpf(): void {
        this.situacaoCpf = ValidacaoCPF.validarCpf(this.paciente.cpf);
    }

    public mascararCpf(tecla: KeyboardEvent): boolean {
        if (ValidacaoTipos.validarApenasNumeros(tecla.key)) {
            this.paciente.cpf = ValidacaoCPF.inclurMascara(this.paciente.cpf);
        } else {
            return false;
        }
    }

    public salvarDados(): void {
        this.cadastroService.salvarPaciente(this.paciente).subscribe(resposta => {
            this.postRetorno = resposta;
            this.cadastroForm.resetForm();
            this.snackBar.open('Paciente Salvo com Sucesso!', ':D', {
                duration: 5000,
            });
            this.router.navigate(['/home']);
            setTimeout(() => {
                this.router.navigate(['home/pacientes']);
            }, 100);
        });
    }
    public verificarCep(): void {
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

    public verificaFlags(flag): void {
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


    public validarTelefone(tecla: KeyboardEvent, tipoTelefone: string): boolean {
        if (ValidacaoTipos.validarApenasNumeros(tecla.key)) {
            switch (tipoTelefone) {
                case 'F':
                    this.paciente.telefoneResidencial = this.validacoes.validarMascaraTelefoneFixo(this.paciente.telefoneResidencial);
                    break;
                case 'C':
                    this.paciente.celular = this.validacoes.validarMascaraTelefoneFixo(this.paciente.celular);
                    break;
            }
        } else {
            return false;
        }
    }
}

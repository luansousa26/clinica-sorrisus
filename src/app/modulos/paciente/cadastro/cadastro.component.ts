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
    flagMedicamento: boolean;
    situacaoCpf: boolean;
    focusoutCpf: boolean;
    botao = 'Salvar';

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
        this.verificaAcao();
    }

    private verificaAcao(): void {
        if (this.pacienteAtualizacao) {
            this.paciente = this.pacienteAtualizacao;
            this.botao = 'Atualizar';
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
        this.pacienteAtualizacao ? this.atualizarPaciente() : this.criarNovo();
    }

    private criarNovo(): void {
        this.cadastroService.savePacientes(this.paciente).subscribe((pacienteSalvo: PacienteModel) => {
            this.cadastroForm.resetForm();
            this.snackBar.open(`Paciente ${pacienteSalvo.nomeCompleto} Salvo com Sucesso!`, ':D', {
                duration: 5000,
            });
            this.atualizarTela();
        });
    }

    private atualizarPaciente(): void {
        this.cadastroService.updatePacientes(this.paciente.id, this.paciente).subscribe((pacienteAtualizado: PacienteModel) => {
            this.cadastroForm.resetForm();
            this.snackBar.open(`Paciente ${pacienteAtualizado.nomeCompleto} Atualizado com Sucesso!`, ':D', {
                duration: 5000,
            });
            this.atualizarTela();
        });
    }
    public deletarPaciente(): void {
        this.cadastroService.deletePacientes(this.paciente.id).subscribe(() => {
            this.cadastroForm.resetForm();
            this.snackBar.open(`Paciente deletado com Sucesso!`, ':D', {
                duration: 5000,
            });
            this.atualizarTela();
        });
    }

    private atualizarTela(): void {
        this.router.navigate(['/home']);
        setTimeout(() => {
            this.router.navigate(['home/pacientes']);
        }, 100);
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

    public validarTelefone(tecla: KeyboardEvent, tipoTelefone: string): boolean {
        if (ValidacaoTipos.validarApenasNumeros(tecla.key)) {
            switch (tipoTelefone) {
                case 'F':
                    this.paciente.telefoneResidencial = this.validacoes.validarMascaraTelefoneFixo(this.paciente.telefoneResidencial);
                    break;
                case 'C':
                    this.paciente.celular = this.validacoes.validarMascaraTelefoneCelular(this.paciente.celular);
                    break;
            }
        } else {
            return false;
        }
    }
}

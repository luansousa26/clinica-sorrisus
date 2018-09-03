import { EnderecoModel } from './endereco.model';
import { DadosClinicosModel } from './dados-clinicos.model';
export class PacienteModel {
    id?: number;
    nomeCompleto?: string;
    dataNascimento?: any;
    sexo?: string;
    cpf?: string;
    profissao?: string;
    endereco?: EnderecoModel;
    dadosClinicos?: DadosClinicosModel;
    telefoneResidencial: string;
    celular?: string;
    email?: any;
}


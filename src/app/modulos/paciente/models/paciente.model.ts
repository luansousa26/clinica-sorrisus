import { EnderecoModel } from './endereco.model';
import { DadosClinicosModel } from './dados-clinicos.model';
export class PacienteModel {
    id?: number;
    nomeCompleto?: string;
    dataNascimento?: any;
    sexo?: string;
    cpf?: any;
    profissao?: string;
    endereco?: EnderecoModel;
    dadosClinicos?: DadosClinicosModel;
    telefoneResidencial: any;
    celular?: any;
    email?: any;
}


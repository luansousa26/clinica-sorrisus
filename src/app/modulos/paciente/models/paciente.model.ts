import { EnderecoModel } from './endereco.model';
import { DadosClinicosModel } from './dados-clinicos.model';
export class PacienteModel {
    nomeCompleto?: string;
    dataNascimento?: any;
    sexo?: string;
    cpf?: any;
    endereco?: EnderecoModel;
    dadosClinicos?: DadosClinicosModel;
    telefoneResidencial: any;
    celular?: any;
    email?: any;
}


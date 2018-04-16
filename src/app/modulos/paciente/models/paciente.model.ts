import { EnderecoModel } from './endereco.model';
export class PacienteModel {
    nomeCompleto?: string;
    dataNascimento?: any;
    sexo?: string;
    cpf?: any;
    endereco?: EnderecoModel;
    telefoneResidencial: any;
    celular?: any;
    email?: any;
}

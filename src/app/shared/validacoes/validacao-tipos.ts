import { EnumTipos } from '../enums/enum-tipos';

export class ValidacaoTipos {

    public static validarApenasNumeros(texto: string): boolean {
        return new RegExp(EnumTipos.NUMERICO).test(texto);
    }

    public static validarApenasLetrasEspaco(tecla: KeyboardEvent): boolean   {
        return new RegExp(EnumTipos.LETRAS_E_ESPACO).test(tecla.key);
    }

    public static validarMascaraTelefoneFixo(telefone: string) {
        if  (telefone) {
            switch  (telefone.length) {
                case 1:
                telefone = `(${telefone}`;
                break;
                case 3:
                telefone = `${telefone})`;
                break;
                case 8:
                telefone = `${telefone}-`;
            }
        }
    }
    public static validarMascaraTelefoneCelular(telefone: string) {
        if  (telefone) {
            switch  (telefone.length) {
                case 1:
                telefone = `(${telefone}`;
                break;
                case 3:
                telefone = `${telefone})`;
                break;
                case 9:
                telefone = `${telefone}-`;
            }
        }
    }
}

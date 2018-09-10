import { EnumTipos } from '../enums/enum-tipos';

export class ValidacaoTipos {

    public static validarApenasNumeros(tecla: string): boolean {
        return new RegExp(EnumTipos.NUMERICO).test(tecla);
    }

    public static validarApenasLetrasEspaco(tecla: KeyboardEvent): boolean {
        return new RegExp(EnumTipos.LETRAS_E_ESPACO).test(tecla.key);
    }



    /* Validação de telefones:
        1. Fixo.
        2. Celular.
    */

    public static validarMascaraTelefoneFixo(telefone: string): string {
             if (telefone) {
            switch (telefone.length) {
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
        return telefone;
    }
    public static validarMascaraTelefoneCelular(telefone: string): string {
        if (telefone) {
            switch (telefone.length) {
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
        return telefone;
    }

    public static validarCampoTelefone(telefone: string, tipoTelefone: string): string {

        if (telefone) {
            switch (tipoTelefone) {
                case 'F':
                    if (telefone.length < 13) {
                        return telefone = null;
                    }
                    break;
                case 'C':
                    if (telefone.length < 14) {
                        return telefone = null;
                    }
                    break;
            }
        }
        return telefone;
    }


    public static validarEmail(email: string): string {
        return new RegExp(EnumTipos.EMAIL).test(email) ? email : null;
    }
}

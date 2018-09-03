import { EnumTipos } from '../enums/enum-tipos';

export class ValidacaoTipos {

    public static validacaoApenasNumeros(texto: string): boolean {
        return new RegExp(EnumTipos.NUMERICO).test(texto);
    }

    public static validacaoApenasLetrasEspaco(tecla: KeyboardEvent): boolean   {
        return new RegExp(EnumTipos.LETRAS_E_ESPACO).test(tecla.key);
    }
}

import { EnumTipos } from '../enums/enum-tipos';

export class ValidacaoTipos {

    public static validacaoApenasNumeros(texto: string): boolean {
        return new RegExp(EnumTipos.NUMERICO).test(texto);
    }
}

export class ValidacaoCPF {

    public static validarCpf(cpf: String): boolean {

        if (cpf && cpf.length === 14 || cpf && cpf.length === 11) {
            let soma = 0;
            let resto;

            if (cpf === '') {
                return false;
            } else {
                // deixa apenas os numeros
                cpf = cpf.replace(/[^0-9]+/g, '');
            }

            // Primeiro digito
            if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' ||
                cpf === '44444444444' || cpf === '55555555555' ||
                cpf === '66666666666' || cpf === '77777777777' ||
                cpf === '88888888888' || cpf === '99999999999') {
                return false;

            }
            for (let i = 1; i <= 9; i++) {
                // tslint:disable-next-line:radix
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
                resto = (soma * 10) % 11;
            }

            if ((resto === 10) || (resto === 11)) {
                resto = 0;

            }
            // tslint:disable-next-line:radix
            if (resto !== parseInt(cpf.substring(9, 10))) {
                return false;
            }

            // Segundo digito
            soma = 0;

            for (let i = 1; i <= 10; i++) {
                // tslint:disable-next-line:radix
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;

            if ((resto === 10) || (resto === 11)) {
                resto = 0;
            }
            // tslint:disable-next-line:radix
            if (resto !== parseInt(cpf.substring(10, 11))) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    }

    public static inclurMascara(cpf: string): string {
        if (cpf) {
            switch (cpf.length) {
                case 3:
                    cpf = `${cpf}.`;
                    break;
                case 7:
                    cpf = `${cpf}.`;
                    break;
                case 11:
                    cpf = `${cpf}-`;
                    break;
            }
        }
        return cpf;
    }
}

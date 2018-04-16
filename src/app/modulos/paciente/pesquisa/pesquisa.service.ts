import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import 'rxjs/add/operator/map';
import {
    HttpClient,
    HttpResponse
} from '@angular/common/http';
import {
    Observable
} from 'rxjs/Observable';
@Injectable()
export class PesquisaService {

    constructor(private http: HttpClient) { }

    private urlUsuarios = 'https://demo4677424.mockable.io/usuarios';

    getUsuarios() {
        return this.http.get(`${this.urlUsuarios}`);
    }

    /* Abaixo segue o Json inserido no site mockable
    {
    "usuarios":[
{
    "id":1,
    "nome":"Luan sousa",
    "idade":22,
    "profissao":"Desenvolvedor"
},
{
    "id":2,
    "nome":"Bruno",
    "idade":25,
    "profissao":"Aux. Administrativo"
},

{
    "id":3,
    "nome":"Regilene Rosangela",
    "idade":22,
    "profissao":"Empresária"
},
{
    "id":4,
    "nome":"Júnior Santos",
    "idade":22,
    "profissao":"Autônomo"
},
{
    "id":5,
    "nome":"Giuseppe Boliviano",
    "idade":22,
    "profissao":"Auxiliar de Manobrista"
},
{
    "id":6,
    "nome":"Everton",
    "idade":32,
    "profissao":"Vendedor de Trufa"
}
]
}

  */
}
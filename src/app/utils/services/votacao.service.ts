import { ProjetoModel } from './../models/projeto.model';
import { CategoriaModel } from './../models/categoria.model';
import { ApiUrls } from '../../api-urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class VotacaoService {

    constructor(
        private http: HttpClient
    ) { }

    getProjetos() {
        const url = ApiUrls.votacao.getProjetos();
        return this.http.get<any[]>(url);

    }
    getProjetoId(projeto: ProjetoModel) {
        const url = ApiUrls.votacao.getProjetoId(projeto.id);
        return this.http.get<any>(url);

    }

    getProjetosIdCategoria(categoria: CategoriaModel) {
        const url = ApiUrls.votacao.getProjetosIdCategoria(categoria.id);
        return this.http.get<any[]>(url);

    }

    getCategorias() {
        const url = ApiUrls.votacao.getCategorias();
        return this.http.get<any[]>(url);

    }

    private extrairDados(res: Response) {

        // const body = res.json();
        return res || {};
    }

    private capturarErro(error: any) {
        return ErrorObservable.create(error);
    }
}

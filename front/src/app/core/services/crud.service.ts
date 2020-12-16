import {Injectable} from '@angular/core';
import {CrudInterface} from './crud.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class CrudService<T> implements CrudInterface<T> {

    protected abstract getPath(): string;

    constructor(private httpClient: HttpClient) {
    }

    find(parameter?: string): Observable<T[]> {
        return this.httpClient.get<T[]>(environment.url + this.getPath() + (parameter ? parameter + '/' : ''));
    }

    post(model: T, url?: string): Observable<object> {
        return this.httpClient.post(environment.url + this.getPath() +
            (url ? url + '/' : ''), model);
    }

    update(model: T, parameter: string): Observable<object> {
        return this.httpClient.put(environment.url + this.getPath() + (parameter ? parameter + '/' : ''), model);
    }

    delete(parameter: string): Observable<object> {
        return this.httpClient.delete(environment.url + this.getPath() + (parameter ? parameter + '/' : ''));
    }
}

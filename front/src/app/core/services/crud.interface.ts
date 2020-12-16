import {Observable} from 'rxjs';

export interface CrudInterface<T> {
    find(parameter?: string): Observable<T[]>;

    post(data: T, url?: string): Observable<object>;

    update(data: T, parameter: string): Observable<object>;

    delete(parameter: string): Observable<object>;
}

import { Injectable } from '@angular/core';
import {CrudService} from "../../../core/services/crud.service";

@Injectable({
  providedIn: 'root'
})
export class AutoresService extends CrudService<object>{
  protected getPath(): string {
    return "/autor/";
  }
}

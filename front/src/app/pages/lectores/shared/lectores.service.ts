import {Injectable} from '@angular/core';
import {CrudService} from "../../../core/services/crud.service";

@Injectable({
  providedIn: 'root'
})
export class LectoresService extends CrudService<object> {
  protected getPath(): string {
    return "/lector/";
  }
}

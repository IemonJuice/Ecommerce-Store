import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogParameterService {

  private dataSubject = new BehaviorSubject<string>('Home')
  public data$ = this.dataSubject.asObservable();

  setData(data: any):void {
    this.dataSubject.next(data);
  }

  getData():Observable<string> {
    return this.data$;
  }

  constructor() {
  }
}

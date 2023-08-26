import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GetProductsQuantityService {
  constructor( private db:AngularFirestore) { }

  getQuantity(quantity:any):any{
    if(localStorage.getItem('cart')){
      quantity = localStorage.getItem('cart');
      quantity = JSON.parse(quantity)
      return quantity.length
    }
  }
  fetchData(receivedData:string):Observable<any>{
   return  this.db.collection(`catalog/${receivedData}/${receivedData}s`).valueChanges();
  }

}

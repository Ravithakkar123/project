import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { ICustomer } from '../customer/customer';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
      private url: string = "/assets/data/customer.json";
      constructor(private http : HttpClient){}
       formData : Customer;

   GetCustomer() : Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.url);
  }
  
 postCustomer(formData : Customer)  : any
    { 
       console.log(formData);
   }
}

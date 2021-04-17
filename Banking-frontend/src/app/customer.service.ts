import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app-model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer) : Observable<object>{
    let url = "http://localhost:8181/register";
    return this.http.post(url,customer);
  }
}

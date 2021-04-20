import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app-model/customer';
import { Observable } from 'rxjs';
import { NetbankingCredentials } from './app-model/netbankingcredentials';
import { Login } from './app-model/login';
import { Transactions } from './app-model/transactions';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer) : Observable<any>{
    let url = "http://localhost:8181/register";
    return this.http.post(url,customer);
  }

  registerNetBanking(credentials: NetbankingCredentials) : Observable<object>{
    let url = "http://localhost:8181/netbanking";
    return this.http.post(url,credentials);
  }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8181/userlogin";
   return this.http.post(url, login); 
  }

  impsTransaction(transactions: Transactions) : Observable<object>{
    let url = "http://localhost:8181/impstransaction";
    return this.http.post(url,transactions);
  }
  
  neftTransaction(transactions: Transactions) : Observable<object>{
    let url = "http://localhost:8181/nefttransaction";
    return this.http.post(url,transactions);
  }

  rtgsTransaction(transactions: Transactions) : Observable<object>{
    let url = "http://localhost:8181/rtgstransaction";
    return this.http.post(url,transactions);
  }

  picUpload(formData: FormData) : Observable<any> {
    let url = "http://localhost:8181/pic-upload";
   return this.http.post(url, formData); 
  }

  fetchProfile(id: number) : Observable<Customer> {
    let url = "http://localhost:8181/profile?customerId="+id;
   return this.http.get<Customer>(url); 
  }

}

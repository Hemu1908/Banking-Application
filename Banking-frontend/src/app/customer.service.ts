import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app-model/customer';
import { Observable } from 'rxjs';
import { NetbankingCredentials } from './app-model/netbankingcredentials';
import { Login } from './app-model/login';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer) : Observable<object>{
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
}

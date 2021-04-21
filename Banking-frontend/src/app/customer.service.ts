import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app-model/customer';
import { Observable } from 'rxjs';
import { NetbankingCredentials } from './app-model/netbankingcredentials';
import { Login } from './app-model/login';
import { Transactions } from './app-model/transactions';
import { SetPassword } from './app-model/setPassword';


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
  
  setPassword(newPassword: SetPassword) : Observable<object>{
    let url = "http://localhost:8181/SetPassword";
    return this.http.post(url, newPassword);
  }
}

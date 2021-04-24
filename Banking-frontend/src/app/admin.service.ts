import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminTransaction } from './app-model/adminTransaction';
import { CustomerRequest } from './app-model/customerRequest';
import { UserCredential } from './app-model/userCredential';
import { Transactions } from './app-model/transactions';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }
  fetchTransactions(fromAccount:number) : Observable<AdminTransaction[]> {
    let url = "http://localhost:8181/TransactionViewAdmin?accNumber="+fromAccount;
   return this.http.get<AdminTransaction[]>(url); 
  }

  fetchAccountRequest() : Observable<CustomerRequest[]> {
    let url = "http://localhost:8181/RequestViewByAdmin";
   return this.http.get<CustomerRequest[]>(url); 
  }
  setCredential(credential: UserCredential) : Observable<any> {
    let url = "http://localhost:8181/setcredential";
   return this.http.post(url, credential); 
  }

  fetchFiles(serviceRef:number) : Observable<CustomerRequest> {
    let url = "http://localhost:8181/profile?referenceId="+serviceRef;
   return this.http.get<CustomerRequest>(url); 
  }
  removeAccount(serviceRef:number) : Observable<CustomerRequest> {
    let url = "http://localhost:8181/remove?referenceId="+serviceRef;
   return this.http.delete<CustomerRequest>(url); 
  }
  getDetails(customerId:number) : Observable<UserCredential[]> {
    let url = "http://localhost:8181/accountview?customerId="+customerId;
   return this.http.get<UserCredential[]>(url); 
  }
  getDetailsForAdmin() : Observable<UserCredential[]> {
    let url = "http://localhost:8181/adminaccountview";
   return this.http.get<UserCredential[]>(url); 
  }
  
}
 /*fetchRequestFiles(serviceRef:number) : Observable<CustomerRequest> {
    let url = "http://localhost:8181/FileViewByAdmin?ref="+serviceRef;
   return this.http.get<CustomerRequest>(url); 
  }*/

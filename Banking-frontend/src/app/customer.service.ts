import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app-model/customer';
import { Observable } from 'rxjs';
import { NetbankingCredentials } from './app-model/netbankingcredentials';
import { Login } from './app-model/login';
import { Transactions } from './app-model/transactions';
import { SetPassword } from './app-model/setPassword';
import { AccountSummary } from './app-model/accountSummary';
import { AddBeneficiary } from './app-model/addBeneficiary';


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

  impsTransaction(transactions: Transactions) : Observable<any>{
    let url = "http://localhost:8181/impstransaction";
    return this.http.post(url,transactions);
  }
  
  neftTransaction(transactions: Transactions) : Observable<any>{
    let url = "http://localhost:8181/nefttransaction";
    return this.http.post(url,transactions);
  }

  rtgsTransaction(transactions: Transactions) : Observable<any>{
    let url = "http://localhost:8181/rtgstransaction";
    return this.http.post(url,transactions);
  }

  setPassword(newPassword: SetPassword) : Observable<object>{
    let url = "http://localhost:8181/SetPassword";
    return this.http.post(url, newPassword);
  }

  picUpload(formData: FormData) : Observable<any> {
    let url = "http://localhost:8181/pic-upload";
   return this.http.post(url, formData); 
  }

  accountSummary(accountNumber: number) : Observable<AccountSummary>{
    let url = "http://localhost:8181/accountSummary?accountNumber="+accountNumber;
    return this.http.get<AccountSummary>(url); 
  }


  sendOtp(customerId: number) : Observable<any>{
    let url = "http://localhost:8181/sendOtp?customerId="+ customerId;
    return this.http.get<any>(url);
}

  addBeneficiary(userAccountNo: number, beneficiaryAccountNo: number, beneficiaryName: string, nickName: string) : Observable<any>{
  let url = "http://localhost:8181/addBeneficiary?userAcc="+userAccountNo+"&beneAcc="+beneficiaryAccountNo+"&beneName="+beneficiaryName+"&nickName="+nickName;
  return this.http.get(url);


}
accountStatementDate(customerId: number,fromDate:string,toDate:string) : Observable<Transactions[]>{
  let url = "http://localhost:8181/getTransactionsByDate?customerId="+customerId+"&fromDate="+fromDate+"&toDate="+toDate;
  return this.http.get<Transactions[]>(url); 
}
//http://localhost:8181/getTransactionsByDate?customerId=1157&fromDate='2001/05/31'&toDate='2011/05/01'

accountStatementMonth(customerId: number,fromDate:string,toDate:string) : Observable<Transactions[]>{
  let url = "http://localhost:8181/getTransactionsByMonth?customerId="+customerId+"&"+fromDate+"&"+toDate;
  return this.http.get<Transactions[]>(url); 
}

allTransactions(custId: number) : Observable<Transactions[]>{
  let url = "http://localhost:8181/getAllTransactions?custId="+custId;
  return this.http.get<Transactions[]>(url); 
}




}
import { Component, OnInit } from '@angular/core';
import { AccountSummary } from '../app-model/accountSummary';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent  {


  accountNumber: number;
  accountSummary: AccountSummary;

  constructor(private customerService: CustomerService) { }

  

  viewSummary(){
    this.customerService.accountSummary(this.accountNumber).subscribe(response =>{
      console.log(JSON.stringify(response));
     this.accountSummary = response;
    })
  }
}

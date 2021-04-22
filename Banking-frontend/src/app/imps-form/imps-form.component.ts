import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-imps-form',
  templateUrl: './imps-form.component.html',
  styleUrls: ['./imps-form.component.css']
})
export class ImpsFormComponent {

  transactions : Transactions = new Transactions();
  referenceId : string;

  constructor(private service : CustomerService) { }

  // message: string;
  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    this.service.impsTransaction(this.transactions).subscribe(data=>{
      console.log(this.transactions);
      alert(JSON.stringify(data));
    
  })
  }
}

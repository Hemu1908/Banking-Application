import { Component, OnInit } from '@angular/core';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-neft-form',
  templateUrl: './neft-form.component.html',
  styleUrls: ['./neft-form.component.css']
})
export class NeftFormComponent {


  transactions : Transactions = new Transactions();
  referenceId : string;

  constructor(private service : CustomerService) { }

  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    this.service.neftTransaction(this.transactions).subscribe(data=>{
      console.log(this.transactions);
      alert(JSON.stringify(data));
    
  })
  }

}

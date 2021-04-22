import { Component, OnInit } from '@angular/core';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-rtgs-form',
  templateUrl: './rtgs-form.component.html',
  styleUrls: ['./rtgs-form.component.css']
})
export class RtgsFormComponent  {

  transactions : Transactions = new Transactions();
  referenceId : string;

  constructor(private service : CustomerService) { }

  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    this.service.rtgsTransaction(this.transactions).subscribe(data=>{
      console.log(this.transactions);
      alert(JSON.stringify(data));
    
  })
  }

}

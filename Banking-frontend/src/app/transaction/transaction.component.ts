import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminTransaction } from '../app-model/adminTransaction';
import { Transactions } from '../app-model/transactions';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  fromAccount:number;
  transaction : AdminTransaction[];
 
  constructor( private adminService : AdminService) { }

  ngOnInit(): void {
    this.fromAccount = parseInt(sessionStorage.getItem('fromAccount'));
    this.adminService. fetchTransactions(this.fromAccount).subscribe(response => {
      //alert(JSON.stringify(response));
      this.transaction = response;
    })
  }

}

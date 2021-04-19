import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminTransaction } from '../app-model/adminTransaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction : AdminTransaction[];
  constructor( private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService. fetchTransactions().subscribe(response => {
      //alert(JSON.stringify(response));
      this.transaction = response;
    })
  }

}

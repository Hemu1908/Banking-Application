import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserCredential } from '../app-model/userCredential';

@Component({
  selector: 'app-admin-account-transaction',
  templateUrl: './admin-account-transaction.component.html',
  styleUrls: ['./admin-account-transaction.component.css']
})
export class AdminAccountTransactionComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  details:UserCredential[];
  custId: number;
  
  ngOnInit(): void {
    this.custId = parseInt(sessionStorage.getItem('customerId'));
    this.adminService.getDetailsForAdmin().subscribe(response => {
      this.details= response;
   
    });
  }
  store(ref:string){
    sessionStorage.setItem('fromAccount',ref);
  }

}

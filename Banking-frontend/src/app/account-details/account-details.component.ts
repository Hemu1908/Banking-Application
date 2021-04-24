import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserCredential } from '../app-model/userCredential';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  details:UserCredential[];
  custId: number;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.custId = parseInt(sessionStorage.getItem('customerId'));
    //alert(this.custId);
    this.adminService.getDetails(this.custId).subscribe(response => {
      //alert(JSON.stringify(response));
      this.details= response;
   
    });
    
  }
    

}

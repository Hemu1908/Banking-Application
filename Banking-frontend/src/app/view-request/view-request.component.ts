import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CustomerRequest } from '../app-model/customerRequest';


@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  accountRequest:CustomerRequest[];
  constructor( private adminService : AdminService) { }


 ngOnInit(): void {
    this.adminService. fetchAccountRequest().subscribe(response => {
      //alert(JSON.stringify(response));
      this.accountRequest = response;
    })
  }

}

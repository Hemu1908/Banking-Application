import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CustomerFiles } from '../app-model/customerfiles';
import { CustomerRequest } from '../app-model/customerRequest';

@Component({
  selector: 'app-view-files-upload',
  templateUrl: './view-files-upload.component.html',
  styleUrls: ['./view-files-upload.component.css']
})
export class ViewFilesUploadComponent  {
 
  //activatedroute is an interface that gives info on  component route
  //router provides url manipulation,navigation methods
  
  /*constructor(private router:Router,private route:ActivatedRoute)  {}*/
   serviceRef:number;
   customerFile:CustomerFiles;
  
   constructor(private adminService: AdminService){}
  ngOnInit(): void {
    this.serviceRef = parseInt(sessionStorage.getItem('serviceRef'));
    this.adminService.fetchRequestFiles(this.serviceRef).subscribe(response => {
      //alert(JSON.stringify(response));
      this.customerFile =response;
      
    })
  }

  
}

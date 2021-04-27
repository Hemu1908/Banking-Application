import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CustomerFiles } from '../app-model/customerfiles';
import { CustomerRequest } from '../app-model/customerRequest';
import { Router,ActivatedRoute } from '@angular/router';


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
   justFiles:CustomerFiles;
   checked:boolean = false;
  fileCount:string="";

  constructor(private adminService: AdminService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
      this.serviceRef = parseInt(sessionStorage.getItem('serviceRef'));
      /*this.adminService.fetchRequestFiles(this.serviceRef).subscribe(response => {
        //alert(JSON.stringify(response));
        this.customerFile =response;
        
      });*/
      this.adminService.fetchFiles(this.serviceRef).subscribe(response=>{
        this.justFiles =response;
    });
  }

  reject(){
    this.adminService.removeAccount(this.serviceRef).subscribe();
      this.router.navigate(['/viewRequest'],{});
      alert(this.serviceRef+" deleted successfully");
  }
  
  addToString(ch:string){
    this.fileCount+=ch;
    if(this.fileCount=== "fil"){
      this.checked= true;
    }
  }
  check1(){
    this.addToString('f');    
  }
  check2(){
    this.addToString('i');
  }
  check3(){
    this.addToString('l'); 
  }
  check4(){
    this.addToString('e');
  }
  


}

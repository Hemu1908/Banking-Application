import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-files-upload',
  templateUrl: './view-files-upload.component.html',
  styleUrls: ['./view-files-upload.component.css']
})
export class ViewFilesUploadComponent  {
  myform :any;
  //activatedroute is an interface that gives info on  component route
  //router provides url manipulation,navigation methods
  

  //model driven form
  constructor(private router:Router,private route:ActivatedRoute)  {
    this.myform = new FormGroup({
      serviceRef : new FormControl()
      /*accType : new FormControl(),
      aadhaarNo : new FormControl()*/
    }
    )
  }
  accept(){
    let data:any = this.myform.value;
    this.router.navigate(['/credential'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }


}

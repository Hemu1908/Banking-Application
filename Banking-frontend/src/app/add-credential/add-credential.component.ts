import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserCredential } from '../app-model/userCredential';

@Component({
  selector: 'app-add-credential',
  templateUrl: './add-credential.component.html',
  styleUrls: ['./add-credential.component.css']
})
export class AddCredentialComponent implements OnInit {
  credential: UserCredential = new UserCredential();
  data:any;
  constructor(private adminService: AdminService, private router: Router,private route:ActivatedRoute) { }
  
  register() {
    //alert(JSON.stringify(this.credential));
    
    this.credential.registration = Number( this.data.serviceRef ) ;
    console.log(this.credential);
    this.adminService.setCredential(this.credential).subscribe(response => {
      alert(JSON.stringify(response));
      /*if(response.status == true) {
        sessionStorage.setItem('customerId', response.accountNumber);
        this.router.navigate(['register-confirmation']);
      }*/
    })
  }

  ngOnInit():void{
    this.route.queryParams.subscribe((params)=>{
      this.data = JSON.parse(params.data);
      
    })
  }
}

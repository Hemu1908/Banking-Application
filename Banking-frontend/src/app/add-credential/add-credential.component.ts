import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
import { UserCredential } from '../app-model/userCredential';

@Component({
  selector: 'app-add-credential',
  templateUrl: './add-credential.component.html',
  styleUrls: ['./add-credential.component.css']
})
export class AddCredentialComponent implements OnInit {
  credential: UserCredential = new UserCredential();
  serviceRef:number;
  constructor(private adminService: AdminService, private router: Router,private route:ActivatedRoute) { }
  
  register() {
    //alert(JSON.stringify(this.credential));
    
    this.credential.registration = Number( this.serviceRef ) ;
    //console.log(this.credential);
    this.adminService.setCredential(this.credential).subscribe(response => {
      //alert(JSON.stringify(response));
      Swal.fire({
        title: "Mail",
        text: "Mail sent successfully!",
        icon: "success",
        confirmButtonText: "Okay"
      });
      this.router.navigateByUrl('/admin');
      /*if(response.status == true) {
        sessionStorage.setItem('customerId', response.accountNumber);
        this.router.navigate(['register-confirmation']);
      }*/
    })
  }

  ngOnInit(): void {
    this.serviceRef = parseInt(sessionStorage.getItem('serviceRef'));
    
  }
  generateCustId(){
    let cust = Number(sessionStorage.getItem("serviceRef"));
    cust+=1000;
    this.credential.customerId=cust;
  }

  generateAccNumber(){
    let cust = Number(sessionStorage.getItem("serviceRef"));
    cust+=10000;
    //alert(cust);
    this.credential.accountNumber=cust;
  }

  generateloginPwd(){
    let cust = sessionStorage.getItem("serviceRef");
    cust += "LoginPass";
    this.credential.loginPassword=cust;
  }
  generateTransactionId(){
    let cust = sessionStorage.getItem("serviceRef");
    cust += "tranPass";
    this.credential.transactionPassword=cust;
  }
  generateAll(){
    let cust = Number(sessionStorage.getItem("serviceRef"));
    let custStr = sessionStorage.getItem("serviceRef");
    
    cust+=1000;
    this.credential.customerId=cust;
    cust+=10000;
    this.credential.accountNumber=cust;
   
    custStr += "LoginPass";
    this.credential.loginPassword=custStr;

    custStr += "tranPass";
    this.credential.transactionPassword=custStr;
  }

}

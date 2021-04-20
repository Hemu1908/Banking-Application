import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserCredential } from '../app-model/userCredential';


@Component({
  selector: 'app-add-credential',
  templateUrl: './add-credential.component.html',
  styleUrls: ['./add-credential.component.css']
})
export class AddCredentialComponent {
  credential: UserCredential = new UserCredential();
  
  constructor(private adminService: AdminService, private router: Router) { }

  @Input() serviceRef: number;
  register() {
    //alert(JSON.stringify(this.credential));
    this.adminService.setCredential(this.credential).subscribe(response => {
      alert(JSON.stringify(response));
     
      /*if(response.status == true) {
        sessionStorage.setItem('customerId', response.accountNumber);
        this.router.navigate(['register-confirmation']);
      }*/
    })
  }
}

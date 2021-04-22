import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetPassword } from '../app-model/setPassword'
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  setPassword: SetPassword = new SetPassword();
  message: string;
  customerId: number;

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
  }
  otp(){
    this.router.navigateByUrl('/otpValidation');
  }

  add(){
    this.setPassword.customerId = this.customerId;
    this.service.setPassword(this.setPassword).subscribe(data=>{
      
      console.log(this.setPassword);
      alert(JSON.stringify(data));
    })
    //alert("details added successfully");
  }

}

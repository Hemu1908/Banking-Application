import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  fetchedOtp: string;
  userOtp: string;

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
  }
  // otp(){
  //   this.router.navigateByUrl('/otpValidation');
  // }

  generateOtp(){
    var customerId = Number(sessionStorage.getItem('customerId'))
    this.service.sendOtp(customerId).subscribe(response=>{
      console.log(response);
      this.fetchedOtp = response;
    })
    Swal.fire({
      title: 'Please enter OTP to continue',
      html:
        '<input type="text" id="swal-input1" class="swal2-input" placeholder="Enter OTP">',
      focusConfirm: false,
      confirmButtonText: `Submit`,
      preConfirm: () => {
        return [
          this.userOtp = (<HTMLInputElement>document.getElementById('swal-input1')).value,
          this.add()
        ]
      }
    })
  }
  
  add(){
    this.setPassword.customerId = this.customerId;
    if(this.fetchedOtp == this.userOtp){
      this.service.setPassword(this.setPassword).subscribe(data=>{
        console.log(this.setPassword);
        //alert(JSON.stringify(data));
        Swal.fire({
          title: "Change Password",
          text: "Password changed successfully!",
          icon: "success",
          confirmButtonText: "Okay"
        });
        this.router.navigateByUrl('/loginPage');
    })
    //alert("details added successfully");
  }
  else{
    //alert("Invalid Otp!");
    Swal.fire({
      title: "Transfer Unsuccessful",
      text: "Transfer rejected because of invald OTP",
      icon: "error",
      confirmButtonText: "Okay"
    });
    }
  }
}

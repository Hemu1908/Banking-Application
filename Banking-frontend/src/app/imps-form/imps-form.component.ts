import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-imps-form',
  templateUrl: './imps-form.component.html',
  styleUrls: ['./imps-form.component.css']
})
export class ImpsFormComponent {

  transactions : Transactions = new Transactions();
  referenceId : string;
  accounts = JSON.parse(sessionStorage.getItem('accounts'));

  constructor(private service : CustomerService) { }
  fetchedOtp: String;
  userOtp: String;
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
          this.transfer()
        ]
      }
    })
  }
  // message: string;
  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    if(this.fetchedOtp == this.userOtp){
      this.service.impsTransaction(this.transactions).subscribe(data=>{
      console.log(this.transactions);
      alert(JSON.stringify(data));
    })
    }
    else{
      alert("Invalid Otp!");
    }
  
  }
}

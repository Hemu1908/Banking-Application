import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-neft-form',
  templateUrl: './neft-form.component.html',
  styleUrls: ['./neft-form.component.css']
})
export class NeftFormComponent {


  transactions : Transactions = new Transactions();
  referenceId : string;
  accounts = JSON.parse(sessionStorage.getItem('accounts'));

  constructor(private service : CustomerService, private router : Router) { }
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
  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    if(this.fetchedOtp == this.userOtp){
      Swal.fire({ 
        title: "Transfer Successful",
        text: "Amount debited successfully!",
        icon: "success",
        confirmButtonText: "Okay"
      });
      this.service.rtgsTransaction(this.transactions).subscribe(data=>{
          if(data.status == true){
            Swal.fire({ 
              title: "Transfer Successful",
              text: "Amount debited successfully!",
              icon: "success",
              confirmButtonText: "Okay"
            });
          }
          else{
            Swal.fire({
              title: "Transfer Unsuccessful",
              html: '<h2>Transfer rejected due to one following reasons:</h2>'+
                    '<h3>1. Insufficient balance</h3>'+
                    '<h3>2. Invalid Receipent account number</h3>'+
                    '<h3>3. Invalid Transaction password</h3>',
              icon: "error",
              confirmButtonText: "Okay"
            });
          }
        })
        }
        else{
          //alert("Invalid Otp!");
          Swal.fire({
            title: "Transfer Unsuccessful",
            text: "Transfer rejected because of invalid OTP",
            icon: "error",
            confirmButtonText: "Okay"
          });
        }
      
      }
    }
    
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Transactions } from '../app-model/transactions';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-rtgs-form',
  templateUrl: './rtgs-form.component.html',
  styleUrls: ['./rtgs-form.component.css']
})
export class RtgsFormComponent  {

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
  transfer(){
    this.transactions.customerId=sessionStorage.getItem('customerId');
    if(this.fetchedOtp == this.userOtp){
      this.service.rtgsTransaction(this.transactions).subscribe(data=>{
        //console.log(this.transactions);
        if(data.status==true){
          let refer= data.refernceNo;
          let message= data.message;
          sessionStorage.setItem('message',message);
          sessionStorage.setItem('referenceNo',String(refer));
          }
          //alert(JSON.stringify(data));
          Swal.fire({ 
            title: "Transfer Successful",
            text: "Amount debited successfully!",
            icon: "success",
            confirmButtonText: "Okay"
          });
        })
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
    
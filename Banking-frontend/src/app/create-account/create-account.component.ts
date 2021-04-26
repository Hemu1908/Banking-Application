import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../app-model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  customer: Customer = new Customer(); 
  message: string;
  

  constructor(private router : Router, private service: CustomerService) { }

  ngOnInit(): void {
  }

  checkStatus(){
    this.router.navigateByUrl('checkStatus');
  }

  backHome(){
    this.router.navigateByUrl('');
  }

  add() {
   
    this.service.addCustomer(this.customer).subscribe(data =>{
    //alert(JSON.stringify(this.customer));
    //alert(JSON.stringify(data));
    //console.log(data);
    //this.message = data['message'];
    //this.customer.referenceNo = data.referenceNo;

    if(data.status == true){

      //alert(JSON.stringify(data));
      Swal.fire({
        title: "Registration",
        text: "Details added successfully!",
        icon: "success",
        confirmButtonText: "Okay"
      });
      console.log(JSON.stringify(data.referenceId));
      let referenceId = data['referenceId'];
      sessionStorage.setItem('referenceId',referenceId);
      this.router.navigateByUrl('documentUpload');
    }
    else{
     // alert(JSON.stringify(data));
     //alert("already a customer..redirecting to login page!!");
     Swal.fire({
      title: "Welcome Customer",
      text: "Already a customer..redirecting to login page!!",
      icon: "success",
      confirmButtonText: "Okay"
    });
      this.router.navigateByUrl('loginPage');
    }
    

  })
 }



}

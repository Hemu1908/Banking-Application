import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../app-model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  customer: Customer = new Customer(); 
  message: string

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

    if(data.status == true){
      this.router.navigateByUrl('documentUpload');
    }
    else{
     // alert(JSON.stringify(data));
     alert("already a customer..redirecting to login page!!");
      this.router.navigateByUrl('loginPage');
    }
    

  })
 }


  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../app-model/customer';
import { Login } from '../app-model/login';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent{

  login: Login = new Login();
  // register: Customer = new Customer();
  message: string;
  constructor(private router: Router, private service: CustomerService) { }

  dashboard(){
    this.router.navigateByUrl('/userDashboard');
  }
  home(){
    this.router.navigateByUrl('');
  }

  loginCheck(){
    console.log(this.login);
    this.service.login(this.login).subscribe(response =>{
      alert(JSON.stringify(response));
      console.log(response);
      if(response.loginStatus == true){
        let customerId = response.customerId;
        sessionStorage.setItem('customerId', String(customerId));
        // sessionStorage.setItem('firstName', this.register.firstName);
        this.router.navigateByUrl('userDashboard');
      }
      else{
        this.message = response.message;
      }
    })
  }

}

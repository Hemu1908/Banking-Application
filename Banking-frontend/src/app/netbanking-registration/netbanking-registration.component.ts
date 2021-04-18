import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetbankingCredentials } from '../app-model/netbankingcredentials';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-netbanking-registration',
  templateUrl: './netbanking-registration.component.html',
  styleUrls: ['./netbanking-registration.component.css']
})

export class NetbankingRegistrationComponent implements OnInit {

   credentials: NetbankingCredentials = new NetbankingCredentials();
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

  register(){
    if(this.credentials.password!=this.credentials.confirmPassword){
      alert("Passwords should match");
    }
    else{
      this.service.registerNetBanking(this.credentials).subscribe(data =>{
        alert(JSON.stringify(this.credentials));
        alert(JSON.stringify(data));
        console.log(data);
        this.message = data['message'];
      })
  }
}
}

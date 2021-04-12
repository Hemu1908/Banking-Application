import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent {

  constructor(private router: Router) { }
  loginPage(){
    this.router.navigateByUrl('/loginPage');
  }
}

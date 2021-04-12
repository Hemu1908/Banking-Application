import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private router: Router) { }
  loginPage(){
    this.router.navigateByUrl('/loginPage');
  }
  newPassword(){
    this.router.navigateByUrl('/newPasswordPage');
  }

}

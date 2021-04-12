import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginAgain(){
    this.router.navigateByUrl('/loginPage');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netbanking-registration',
  templateUrl: './netbanking-registration.component.html',
  styleUrls: ['./netbanking-registration.component.css']
})
export class NetbankingRegistrationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  backHome(){
    this.router.navigateByUrl('');
  }

}

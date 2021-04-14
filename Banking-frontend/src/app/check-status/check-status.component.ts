import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  message: string;

  status(){
    this.message = "Your status is pending";
  }
  home(){
    this.router.navigateByUrl('');
  }

}

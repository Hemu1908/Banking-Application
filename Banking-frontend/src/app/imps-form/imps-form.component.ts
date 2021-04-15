import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imps-form',
  templateUrl: './imps-form.component.html',
  styleUrls: ['./imps-form.component.css']
})
export class ImpsFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // message: string;
  success(){
    alert("Transaction successful!");
    this.router.navigateByUrl('userDashboard');
    // this.message = "Transaction successful!"
  }

}

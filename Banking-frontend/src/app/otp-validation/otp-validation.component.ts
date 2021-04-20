import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OtpValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*@ViewChild('ngOtpInput') ngOtpInputRef:any;//Get reference using ViewChild and the specified hash
  onOtpChange(){
    this.ngOtpInputRef.setValue(9874);//yourvalue can be any string or number eg. 1234 or '1234'
}*/

}

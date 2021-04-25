import { Component, OnInit } from '@angular/core';
import { AddBeneficiary } from '../app-model/addBeneficiary';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  addBeneficiary: AddBeneficiary = new AddBeneficiary();
  message: string;
  accounts = JSON.parse(sessionStorage.getItem('accounts'));
  beneficiaryAccountNo: number;
  userAccountNo:number;
  //beneficiaryAccountNo : number; 


  //accountNumber: number;
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    //const body=JSON.stringify(person);
    this.accounts = JSON.parse(sessionStorage.getItem('accounts'));
    console.log(this.accounts);
    this.addBeneficiary.compoundKey.userAccountNo=this.accounts[0];

  }

  add(){
    //this.addBeneficiary.userAccountNo = parseInt(sessionStorage.getItem('accounts'));
    //alert(this.addBeneficiary.nickName);
    console.log(this.addBeneficiary.compoundKey.userAccountNo);
    this.service.addBeneficiary(this.addBeneficiary).subscribe(data=>{
     // const headers = { 'content-type': 'application/json'}
      //this.addBeneficiary= data;
      //this.addBeneficiary.compoundKey.beneficiaryAccount.accountNumber = data.addBeneficiary.compoundKey.beneficiaryAccount.accountNumber;
      //alert(this.addBeneficiary.compoundKey.beneficiaryAccount.accountNumber);
      console.log(this.addBeneficiary);
      alert(JSON.stringify(data));
    })
  }

}

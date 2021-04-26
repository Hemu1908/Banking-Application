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

  constructor(private service: CustomerService) { }

  ngOnInit(): void {

    
    
    this.accounts = JSON.parse(sessionStorage.getItem('accounts'));
    console.log(this.accounts);
    
    //console.log(this.addBeneficiary.compoundKey.userAccountNo);

  }

  add(){
    //this.addBeneficiary.userAccountNo = parseInt(sessionStorage.getItem('accounts'));
    //alert(this.addBeneficiary.nickName);
    this.addBeneficiary.compoundKey.userAccountNo=this.accounts[0];
    console.log(this.addBeneficiary.compoundKey.userAccountNo);
      alert(JSON.stringify(this.addBeneficiary));
      this.service.addBeneficiary(this.addBeneficiary.compoundKey.userAccountNo,this.addBeneficiary.compoundKey.beneficiaryAccountNo,this.addBeneficiary.beneficiaryName,this.addBeneficiary.nickName).subscribe(data => {
        alert(JSON.stringify(data));
      })
}
}

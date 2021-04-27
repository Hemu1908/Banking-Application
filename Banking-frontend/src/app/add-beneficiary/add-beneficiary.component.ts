import { Component, OnInit } from '@angular/core';
import { AddBeneficiary } from '../app-model/addBeneficiary';
import { CustomerService } from '../customer.service';
import Swal from 'sweetalert2';

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

  }

  add(event){
    this.addBeneficiary.compoundKey.userAccountNo=this.accounts[0];
    console.log(this.addBeneficiary.compoundKey.userAccountNo);
    if(this.addBeneficiary.beneficiaryName == null || this.addBeneficiary.compoundKey == null || this.addBeneficiary.nickName == null){
      Swal.fire({
        title: "Error",
        text: "Please enter all the details",
        icon: "error",
        confirmButtonText: "Okay"
      });
    }
    else{
      this.service.addBeneficiary(this.addBeneficiary.compoundKey.userAccountNo,this.addBeneficiary.compoundKey.beneficiaryAccountNo,this.addBeneficiary.beneficiaryName,this.addBeneficiary.nickName).subscribe(data => {
        if(data.status==true){
          Swal.fire({
            title: "Beneficiary",
            text: "Details added successfully!",
            icon: "success",
            confirmButtonText: "Okay"
          });
        }
        
      })
    }
      
}
}

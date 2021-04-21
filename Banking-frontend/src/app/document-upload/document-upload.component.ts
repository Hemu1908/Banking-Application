import { Component, OnInit } from '@angular/core';
import { Customer } from '../app-model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  //customer : Customer

  aadharPic: any;
  panPic: any;
  lightBill: any;
  gstProof: any;
  referenceId: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    //this.customer.referenceNo = 62;
    this.referenceId=parseInt(sessionStorage.getItem('referenceId'));
    //this.referenceNo=96;
    
  }

  onFileChange(event) {
    if(event.target.name=="aadhar")
    this.aadharPic = event.target.files[0];
    else if(event.target.name=="panPic")
    this.panPic = event.target.files[0];
    else if(event.target.name=="lightBill")
    this.lightBill = event.target.files[0];
    else if(event.target.name=="gstProof")
    this.gstProof = event.target.files[0];
    console.log("hiii");
  }

  upload() {

    let formData: FormData = new FormData();
    formData.append('referenceId', this.referenceId);
    formData.append('aadharPic', this.aadharPic);
    formData.append('panPic', this.panPic);
    formData.append('lightBill', this.lightBill);
    formData.append('gstProof', this.gstProof);
    this.customerService.picUpload(formData).subscribe(response => {
    alert(JSON.stringify(response));
    });
    console.log(this.panPic);
    console.log(this.aadharPic);
    console.log(this.gstProof);
    console.log(this.lightBill);
  }

}

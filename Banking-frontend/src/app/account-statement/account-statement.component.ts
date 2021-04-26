import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { Transactions } from '../app-model/transactions';
import { CustomerService} from '../customer.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminTransaction } from '../app-model/adminTransaction';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  customerId:number;
  transactions:Transactions[];
  transactions2:Transactions[];
  fromDate:string;
  toDate:string;
  filename:string;
  searchCheck:boolean = false;
  downloadCheck:boolean = false; 
  account :number;
 allTransaction = true; 
  constructor(private customerService: CustomerService) { }

  

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    //this.account = parseInt(sessionStorage.getItem('accounts'));
    this.customerService.allTransactions(this.customerId).subscribe(response=>{
        this.transactions =response;
    });
  }
  search(fromDate:string,toDate:string){
    this.allTransaction = false;
    this.downloadCheck=false;
    this.searchCheck =true;
    this.fromDate = fromDate;
    this.toDate = toDate;
    alert(this.fromDate);
    this.customerService.accountStatementDate(this.customerId,this.fromDate,this.toDate).subscribe(response=>{
      alert(response);
        this.transactions =response;
    });
    
  }

  download(fromDate:string,toDate:string){
    this.allTransaction = false;
    this.searchCheck=false;
    this.downloadCheck = true;
    this.fromDate = fromDate;
    this.toDate = toDate;
    
    this.customerService.accountStatementMonth(this.customerId,this.fromDate,this.toDate).subscribe(response=>{
      this.transactions2 =response;
        
    });
    
  }

  downloadPdf(){

    var element = document.getElementById('my_table');
    const input = document.getElementById('my_table');
    //const divHeight = input.clientHeight;
    const divHeight = document.documentElement.clientHeight-250;
    
    const divWidth = document.documentElement.clientWidth;
    const ratio = divHeight / divWidth;
    html2canvas(element).then((canvas)=> {
      var imgData = canvas.toDataURL("image/png")
      var doc = new jspdf.jsPDF();
      //var imgHeight = canvas.height*300 / canvas.width; 
      const width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();
      height = ratio * width;
      doc.addImage(imgData, 5, 10, width - 20, height - 10)//x,y,height,
      doc.save("AccountStmt.pdf");

    })
  }

}

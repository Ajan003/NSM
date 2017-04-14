import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService }   from './data.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'loan-info',
  templateUrl: './loanInfo.component.html',
  styleUrls: [ './loanInfo.component.css' ],
  providers: [DataService]
})
export class LoanInfoComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }
  public loanForm:any = {
  };
  next() {
  	if (!this.loanForm.totalValue || !this.loanForm.totalAmount || !this.loanForm.downpayment || !this.loanForm.tenure || !this.loanForm.interestRate) {
  		window.alert("Please fill the mandatory fields in the form!");
  		window.scrollTo(0, 0);
  	} else {
  		this._dataService.setLoanData(this.loanForm);
  		window.alert("Loan Information Saved");
  		window.alert("Information saved, out loan officer would get in touch with you shortly");
  	}
  }
  ngOnInit(): void {
  	if (this._dataService.getLoanData()) {
  		this.loanForm = this._dataService.getLoanData();
  	}  	
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService }   from './data.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'borrower-info',
  templateUrl: './borrowerInfo.component.html',
  styleUrls: [ './borrowerInfo.component.css' ],
  providers: [DataService]
})
export class BorrowerInfoComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }
  public borrowerForm:any = {
  };
  next() {
  	if (!this.borrowerForm.firstName || !this.borrowerForm.lastName || !this.borrowerForm.pan || !this.borrowerForm.contactNumber) {
  		window.alert("Please fill the mandatory fields in the form!");
  		window.scrollTo(0, 0);
  	} else {
  		this._dataService.setBorrowerData(this.borrowerForm);
  		window.alert("Borrower Information Saved");
  		this._router.navigate(['/propertyInfo']);
  	}
  }
  ngOnInit(): void {
  	if (this._dataService.getBorrowerData()) {
  		this.borrowerForm = this._dataService.getBorrowerData();
  	}  	
  }
}

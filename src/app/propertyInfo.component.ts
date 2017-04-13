import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService }   from './data.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'property-info',
  templateUrl: './propertyInfo.component.html',
  styleUrls: [ './propertyInfo.component.css' ],
  providers: [DataService]
})
export class PropertyInfoComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }
  public propertyForm:any = {
  };
  next() {
  	if (!this.propertyForm.name || !this.propertyForm.size) {
  		window.alert("Please fill the mandatory fields in the form!");
  		window.scrollTo(0, 0);
  	} else {
  		this._dataService.setPropertyData(this.propertyForm);
  		window.alert("Property Information Saved");
  		this._router.navigate(['/loanInfo']);
  	}
  }
  ngOnInit(): void {
  	if (this._dataService.getPropertyData()) {
  		this.propertyForm = this._dataService.getPropertyData();
  	}  	
  }
}

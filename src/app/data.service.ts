import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  getBorrowerData() {
  	return JSON.parse(localStorage.getItem("borrowerInfo"));
  }
  setBorrowerData(data: any) {
  	data = JSON.stringify(data);
  	localStorage.setItem("borrowerInfo", data);
  }
  getPropertyData() {
  	return JSON.parse(localStorage.getItem("propertyInfo"));
  }
  setPropertyData(data: any) {
  	data = JSON.stringify(data);
  	localStorage.setItem("propertyInfo", data);
  }
  getLoanData() {
  	return JSON.parse(localStorage.getItem("loanInfo"));
  }
  setLoanData(data: any) {
  	data = JSON.stringify(data);
  	localStorage.setItem("loanInfo", data);
  }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var router_1 = require("@angular/router");
var LoanInfoComponent = (function () {
    function LoanInfoComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.loanForm = {};
    }
    LoanInfoComponent.prototype.next = function () {
        if (!this.loanForm.totalValue || !this.loanForm.totalAmount || !this.loanForm.downpayment || !this.loanForm.tenure || !this.loanForm.interestRate) {
            window.alert("Please fill the mandatory fields in the form!");
            window.scrollTo(0, 0);
        }
        else {
            this._dataService.setLoanData(this.loanForm);
            window.alert("Loan Information Saved");
            window.alert("Information saved, out loan officer would get in touch with you shortly");
        }
    };
    LoanInfoComponent.prototype.ngOnInit = function () {
        if (this._dataService.getLoanData()) {
            this.loanForm = this._dataService.getLoanData();
        }
    };
    return LoanInfoComponent;
}());
LoanInfoComponent = __decorate([
    core_1.Component({
        selector: 'loan-info',
        templateUrl: './loanInfo.component.html',
        styleUrls: ['./loanInfo.component.css'],
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
], LoanInfoComponent);
exports.LoanInfoComponent = LoanInfoComponent;
//# sourceMappingURL=loanInfo.component.js.map
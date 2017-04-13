import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BorrowerInfoComponent }   from './borrowerInfo.component';
import { PropertyInfoComponent }   from './propertyInfo.component';
import { LoanInfoComponent }   from './loanInfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/borrowerInfo', pathMatch: 'full' },
  { path: 'borrowerInfo',  component: BorrowerInfoComponent },
  { path: 'propertyInfo', component: PropertyInfoComponent },
  { path: 'loanInfo',     component: LoanInfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

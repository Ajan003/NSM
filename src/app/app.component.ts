import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/borrowerInfo" routerLinkActive="active">Borrower Information</a>
      <a routerLink="/propertyInfo" routerLinkActive="active">Property Information</a>
      <a routerLink="/loanInfo" routerLinkActive="active">Loan Information</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Origination System';
}

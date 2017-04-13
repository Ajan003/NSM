import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { BorrowerInfoComponent }   from './borrowerInfo.component';
import { PropertyInfoComponent }   from './propertyInfo.component';
import { LoanInfoComponent }   from './loanInfo.component';
import { DataService }   from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BorrowerInfoComponent,
    PropertyInfoComponent,
    LoanInfoComponent
  ],
  providers: [DataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'


import { Customer } from './shared/customer.model';
import { HttpClientModule} from '@angular/common/http';
import { ViewCustomerComponent } from './customer/ViewCustomer/ViewCustomer.component';
import { AddCustomerComponent } from './customer/AddCustomer/Addcustomer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailGuard } from './customer-detail.guard';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
   
    ViewCustomerComponent,
    AddCustomerComponent,
    WelcomeComponent,
    CustomerDetailComponent,
    CustomerComponent,
    
    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'customer' , component :CustomerComponent},
      {path : 'addcustomer' , component :AddCustomerComponent},
      {path : 'viewcustomer' ,component:ViewCustomerComponent },
      {path : 'viewcustomer/:id',canActivate : [CustomerDetailGuard], component:CustomerDetailComponent },
      {path : 'welcome' , component :WelcomeComponent},
      {path : '', redirectTo:'welcome', pathMatch: 'full'},
      {path : '**' , redirectTo :'welcome',pathMatch : 'full'}
  ])
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }

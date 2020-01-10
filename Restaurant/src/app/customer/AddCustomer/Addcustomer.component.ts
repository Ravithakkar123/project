import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';
import { ICustomer } from '../customer';
import { from } from 'rxjs';
@Component({
  templateUrl: './Addcustomer.component.html',
  styles:[]
})


export class AddCustomerComponent implements OnInit {
    condition : boolean= false;
 
 
   cust = new Customer();
    constructor(private customerservice : CustomerService) { }
     
   
  ngOnInit() {
     
  }
  onclick() {
    
     this.customerservice.postCustomer(this.cust);
  
  }
  
}

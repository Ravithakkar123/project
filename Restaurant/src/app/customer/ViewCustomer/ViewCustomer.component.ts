import { Component, OnInit } from '@angular/core';
import { RecursiveAstVisitor } from '@angular/compiler/src/output/output_ast';
import { ICustomer } from '../customer';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  //selector: 'app-customer-list',
  templateUrl: './viewcustomer.component.html',
  styles:[]
})
export class ViewCustomerComponent  {

  pageTitle:string = 'Customer-Details-List';
  
  customer: Customer[]=[];
  
  constructor(private customerService : CustomerService) {
      let x= this.customer.length;
   }

  ngOnInit() : void {
          
   this.customerService.GetCustomer()
    .subscribe(data => this.customer = data);
  }

}

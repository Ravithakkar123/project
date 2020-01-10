import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template :  
         `
         <nav class='navbar navbar-expand navbar-light bg-light'>
         <h3><a class='navbar-brand'>{{pagetitle}}</a></h3>
          <ul class=' nav nav-pills'>
            <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
            <li><a class='nav-link' [routerLink]="['/customer']">Customer</a></li>
            <li><a class='nav-link' [routerLink]="['/viewcustomer']">View Customer</a></li>
            <li><a class='nav-link' [routerLink]="['/addcustomer']">Add Customer</a></li>
           </ul>
        </nav>
         <div class='container'>
            <router-outlet></router-outlet>
          </div>    	
       
        `
})
export class AppComponent {
  pagetitle : string = 'FoodWoodz Restaurant';
}
  
export interface ICustomer{
    CustomerId : number;
    CustomerName : string;
    CustomerNum : number;
    CustomerEmail : string;
    CustomerPinCode : number;
    CustomerAddress : string;
}

export class Customer {
      constructor(public CustomerName : string,
        public CustomerId : number,
       public CustomerNum : number,
       public CustomerEmail : string,
       public CustomerPinCode :number,
       public CustomerAddress : string,){

        }
}
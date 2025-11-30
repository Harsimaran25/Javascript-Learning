// this is to practice Typescript

let firstName: string='Bhaijaan';
let lastName : string='Clyde King';
let age : number = 40;
// in Js we can do like below
// lastName='45'
//but NOT in Typescript
//firstName=45;

//creating custom type  use keyword type  , here type customer is obj
type Customer={custFirstName: string, custLastName:string, custAge:number , active: boolean};

let firstCustomer :Customer ={
    custFirstName:'Bhaijaan',
    custLastName:'Clyde king',
    custAge:40,
    active:true
}
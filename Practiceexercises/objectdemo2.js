// objects in objects 
//Curly braces hold objects and each name is followed by ':'(colon), the name/value 
// pairs are separated by , (comma).
// Square brackets hold arrays and values are separated by ,(comma).
// We can recognize that this is an object by seeing the { and }. In between the curly braces, we see a bunch
// of properties and their values.
let company ={

companyname:'Bhaijaan healthy candy',
activity:"Lakkk",
address:{
  streetname:' mill ct',
  streetno: 11,
  suburb:'Clyde',
  postcode:420,
  state:'vic'
},
established:'2025'
};

// now 2 ways to access the objects in above company object
console.log(company);
company.address.postcode='0420'; //first method
console.log(company);
company["address"]["state"]='VICToria'; // second method
console.log(company);
company['activity']='patala lak';
console.log(company);
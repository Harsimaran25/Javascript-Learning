// now lets see company object again
// let company={
//     companyname:'Bhai\'s',
//     activities :["sightseeing","mull tarring","trips"],  // array inside object for activities property
// address:{
//     streetnum:'11',
//     streetname:'mill ct',
//     postcode:'9211',
//     suburb:'clyde',
//     state:'VIC'
// },
// };

// console.log(company);
// console.log(company.activities[2]);
// console.log(company.companyname);
// console.log(company.address.suburb);
// lets make it more interesting now the company can have multiple addresses, lets use array for address as below

let company={
    companyname:'Bhai\'s',
    activities :["sightseeing","mull tarring","trips"],
address:[{
    streetnum:'11',
    streetname:'mill ct',
    postcode:'9211',
    suburb:'clyde',
    state:'VIC'
},
{
    streetnum:'420',
    streetname:"mull tarr",
    postcode:'420',
    suburb:'dasuya',
    state:'KINGLY'
}],
};
console.log(company);
console.log(company.activities[2]);
console.log(company.address[0].state);
console.log(company.address[1].streetname);


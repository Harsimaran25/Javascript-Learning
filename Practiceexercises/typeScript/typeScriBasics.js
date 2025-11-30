// this is to learn Typescript basics 
//first program
//common commands 
// tsc --version   to check typescript version
// ts-node  --version    to check typescript dependency version , this runs .ts files directly 
// node abc.ts   -- to directly run the file  abc.ts is file name 
//Typescript variables  - variable is a container to store data
// Declare a number variable
var age1 = 20; // equivalent JS code will be let age=20 
// above age is avaribale ot type number
console.log(age1);
age1 = 'twenty'; /* Error: this is an invalid code, but still will run , typescript will complain
 You don't need to declare types in JavaScript.
 Thus, you can assign data of one type to a variable of another type. But this is forbidden in TypeScript.*/
console.log(age1);
//  for above the -  JavaScript Code
// // Declare variable without type
// // Assign a number to it
// let age = 20;
// // Assign a string data to age variable
// // This is a valid code
// age = "Twenty";

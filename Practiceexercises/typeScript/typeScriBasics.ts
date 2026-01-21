// this is to learn Typescript basics 

//first program
//common commands 

// tsc --version   to check typescript version
// ts-node  --version    to check typescript dependency version , this runs .ts files directly 
// node abc.ts   -- to directly run the file  abc.ts is file name 
//Typescript variables  - variable is a container to store data

//the general syntax of creating variables in TypeScript is:

//--->>  let variableName: dataType;

// Declare a number variable
let age1: number = 20  // equivalent JS code will be let age=20 
// above age is avaribale ot type number

console.log(age1)

/* age1 ='twenty'  /* Error: Type 'string' is not assignable to type 'number'.
this is an invalid code, but still will run , typescript will complain
 You don't need to declare types in JavaScript.
 Thus, you can assign data of one type to a variable of another type. But this is forbidden in TypeScript.*/
console.log(age1)


//  for above the -  JavaScript Code

// // Declare variable without type
// // Assign a number to it
// let age = 20;

// // Assign a string data to age variable
// // This is a valid code
// age = "Twenty";

let full_name : string='Bhai ki Lotto'
console.log(full_name)

var name: string ='Bhai'  //var allows to redeclare variables.
let marks: number =40  

//var can be redeclared again
// var a = 5; // 5
// var a = 3; // 3

//let does not allow to redeclare variables. with let cannot be redeclared within the same block or same scope.

// let a = 5;
// let a = 3; // error 

console.log('name is ', name)
console.log('marks',marks)

var carName: string; // Declare variable carName of type string

carName='BMBhai' // assign or initialize it to BMBhai

console.log(carName)

//declare multiple variables in single line 

let userName : string='BhaiJaan', ageBhai: number =40;

console.log('username is ',userName)


// Declare a number variable called age
let age2: number; 

// Print age
console.log(age2); 

// Output: undefined
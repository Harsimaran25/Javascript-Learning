// convert types using below functions
let nrtostr = 6;
nrtostr = String(nrtostr); // number has been converted to string using string function
console.log(nrtostr, typeof nrtostr);
var greet = "global scope var";
let check = "global let scope";
//function naming syntax - keyword function functionname(parameters if any)
//for example function to add 2 numbers
function adddemo(a, b) {
  return a + b; // return will send the output addition to user
}
let sum = adddemo(2, 3);
console.log(sum);

// functions that do not have name are called anyonymous functions=> for example we can implement above add function using anonymous as below

let sumofnum = function (c, d) {
  // there is no name of this function just keyword function
  return c + d;
};
// even simpler way to implement above is use arrow functions like =>
let sumofnum2 = (e, f) => e + f; // e and f are parameters, => this represents anonymous function, in a way sumofnum2 is function name
console.log(sumofnum2(2, 3));

// scope of Var keyword is global if declared outside function else upto function if declared inside function
//example
function sub(a, b) {
  // this is function greet is scope inside this only
  var greet = "inside subtract"; // now this is scope for this var
  let check = "let in function scope";
  return a - b;
}

let intsub = sub(9, 3);
console.log(greet); // error as greet is not in scope here to fix this define it outside function

if (1 == 1) {
  // if is block not function

  var greet = "This is in block but global scope";
  let check = "let in block scope";
}
console.log(greet); //
// Let scope is either global or Block level
console.log(check);

//declarative function  is hoisted

function subtract(a, b) {
  console.log("difference is", a - b);
}

subtract(10, 5);

//anonymous version of above function, does not have name , not hoisted

let difference = function (a, b) {
  return a - b;
};

console.log("anonymous", difference(10, 5));

//Es6 syntax or arrow function  of above

let difference2 = (a, b) => {
  return a - b;
};

console.log(difference2(10, 5));

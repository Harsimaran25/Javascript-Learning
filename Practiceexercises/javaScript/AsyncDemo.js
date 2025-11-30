// we can use the following program to prove or demonstrate that Javascript is asynchronous

console.log("this is 1st line");
console.log("this is 2st line");
console.log("this is 3st line");
console.log("this is 4st line");

//now running above it will run and print in sequence
//let us settimeout function to prove async nature
//settimeout function takes two arguments, first is the callback function and second is the time in milliseconds after
//  which the callback function will be executed
// here we are using arrow function to define the callback function
// we are using 0 milliseconds to prove that even if we provide 0 milliseconds it will be executed after the current
// execution context is completed

setTimeout(() => {
  console.log("this is 5th line");
}, 2000); //have provided 2000ms which is 2 seconds

//setTimeout(function(){
//console.log('this is 6th line')},2000);
console.log("this is 6st line");
console.log("this is 7st line");

let nums = [10, 20, 33, 14, 40, 44];

//using filter
let evenNum = nums.filter((num) => num % 2 == 0);
console.log(evenNum);

// lets practice functions in TypeScript

// Function to add two numbers
//return type is number after round brackets
function addTwoNum(num1:number,num2:number):number{

    return num1+num2;
}

let g: number=addTwoNum(5,10);
console.log(g);

// let us create a anonymous function to multiply two numbers

let multiply=function(num1:number,num2:number):number{ return num1*num2; }
console.log('multiply',multiply(5,10));



// let us create a arrow function to divide two numbers 


let divide=(a:number,b: number):number=>{return a/b}; 
let d=divide(10,5);
console.log(d);
let subtract=(a:number,b:number):number=>{return a-b};
let s=subtract(10,5);
console.log(s);

// function to print greeting message
//The function keyword is used to create the function.
//We can create a function in TypeScript using the function keyword and specifying a return type:

function greetFunc() : void {  // greetFunc is name of function and void is return type , void which means it doesn't return any value.

console.log('hi from Greet function')// body of function
}

// Call the function
greetFunc()  // calling the function
console.log("Outside function");

/*Arguments
Arguments are values you pass to the function when you call it.*/

//function with a parameter

function greetName(name : string) : void {

    console.log(`hello ${name}`)
}

greetName('ClydeKing')//call the function
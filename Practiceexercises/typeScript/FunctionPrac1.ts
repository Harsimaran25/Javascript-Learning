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

// Function with a string parameter called 'name', 
// name is a function parameter, which acts as a placeholder to store the function argument.

function greetName(name : string) : void {

    console.log(`hello ${name}`)
}

greetName('ClydeKing')//call the function // Pass argument to the function the argument "ClydeKing" is stored in the name parameter.

//function to add two numbers 

function addNums(a: number,b:number) : void{
    let sum = a+b
    console.log(`sum is ${sum}`)
}

addNums(4,3)

//anonymous funtcion 

let myAdd= function (x:number, y:number) : number {
    return x+y
}
console.log(myAdd(4,4))

//lets see return statement We can return a value from a TypeScript function using the return statement

//function to return square of a number
//TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.
function sQuare (j:number) : number {
 return j*j;

}

console.log(sQuare(6))  //OR 

let sqofNum= sQuare(6)
console.log(`square is ${sqofNum}`)

/**The return Statement Terminates the Function
Any code written in the function after the return statement is not executed. */
function display(): string {

    console.log("This will be executed.");

    return "Returning from function.";

    console.log("This will not be executed.");
}

let message: string = display();
console.log(message);
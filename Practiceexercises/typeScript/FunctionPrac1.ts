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


/**Function Expressions
In TypeScript, a function expression is a way to store functions in variables */

/**Syntax

const variableName = function functionName(parameters): returnType {
  // Function body
}; */

//function declaration
function fullName(fn:string,ln: string): string{

    return fn+' '+ln;
}

let fullnm=fullName('bhai','clydeking')
console.log(fullnm);

//add two numbers
// Example 1. Assigning a function to a variable  A function expression
//the function that calculates the addition of a numbers is assigned to the addNos variable.
let addNos= function addn(a:number, b: number): number{
    return a+b;
}

//calling
console.log('addnos',addNos(9,10))

//another way to write is using without name
let addnos2= function (a:number, b: number): number{
    return a+b;
}
console.log('addnos2',addnos2(19,10))

//another approach is Declaring a function expression with the Function keyword.

let squarrer: Function;

squarrer= function(n00:number) : number {
  return n00*n00;
}

console.log(squarrer(9))

//Arrow Functions TypeScript arrow functions are a concise syntax for writing function expressions with support for type annotations.
//Arrow functions are always anonymous
/**The syntax of the arrow function is:

let myFunction = (arg1: Type1, arg2: Type2, ...argN: TypeN): ReturnType => {
    statement(s)
} */
//lets write add number as arrow function

let addArro= (num1:number, num2:number) :number => num1+num2;

const result11:number=addArro(5,14)
console.log(result11)

//another arrow function to add 100 to a number

let addtonum =(x:number) :number => x+100;

const value1 = 10;
console.log(`add 100 to number ${value1} =`,addtonum(value1))

//arrow function to multiply 2 nos

let multi2num=(c:number,g:number): number => c*g;

console.log(multi2num(6,4))

//arrow function without arguments or parameters

const sayHi= () : string => 'hello bhai';
console.log(sayHi())

const greetUser = () : string => {
    const user ='Typescript User';
    console.log(`hello ${user} `)
}
greetUser()

//Arrow Function With One Argument
const multi100s= (x : number) : number => x*100;
console.log(multi100s(9))
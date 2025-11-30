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


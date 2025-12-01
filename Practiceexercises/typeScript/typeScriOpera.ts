//to Understand typescript operators


let num: number = 10;

// Division: divides num by 3
let divisionResult: number = num / 3;
console.log(divisionResult); // Output: 3.3333333333333335

// Remainder: the remainder when num is divided by 3
let remainderResult: number = num % 3;
console.log(remainderResult); // Output: 1

// Increment: increases num by 1
num++;
console.log(num); // Output: 11

// Decrement: decreases num by 1
num--;
console.log(num); // Output: 10

// Exponentiation: raises num to the power of 2
let exponentiationResult: number = num ** 2;
console.log(exponentiationResult); // Output: 100

let num1: number = 5;
let num2: number = 3;

// Check if num1 is greater than num2
let isGreater: boolean = num1 > num2;
console.log(isGreater);

// Output: true


//Ternary Operator
/**The ternary operator in TypeScript, also known as the conditional operator, consists of three parts:

A condition.
An expression to execute if the condition is true.
An expression to execute if the condition is false.

The syntax of the ternary operator is:
condition ? expression1 : expression2 */

let ageof: number = 13;

let canVote: string = ageof >=18 ? 'can vote' : 'underage';

console.log(canVote)
// to learn basic for loop in typescript

// TypeScript - for Loops
// TypeScript supports the following for loops:

// for loop
// for..of loop
// for..in loop

//The TypeScript for loop is used to iterate over a block of code a certain number of times or to iterate over the elements of an array.

// TypeScript for loop Syntax
// The syntax of the for loop is:

// for (initialExpression; condition; updateExpression) {
//     // Body of for loop
// }


// to print message using for loop

for(let i:number =0; i<3;i++){

    console.log('Hello in loop')
}
console.log('out of for loop')

// print numbers 1 to 10 

for(let num:number = 1; num<=10;num++){

    console.log(num)
}

//print sum of first 5 nos

let sum:number=0;

for(let i: number=1;i<=5;i++)
{
    sum=sum+i;


}
console.log(`sum is ${sum}`)




//We can omit any part of the for loop declaration and include it in a different part of the code.
// Initialization outside the loop
let k: number = 0;

// Omit initialization and update statements
for (; k < 3; ) {

    console.log(`k is ${k}`);

    // Increment inside the loop body
    k++; 
}


///-----
// Odd or Even Loop

// Write a JavaScript for loop that iterates from 0 to 15. 
// For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
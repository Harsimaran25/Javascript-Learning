//to learn typescript if else statement 

//The TypeScript if...else statement is used to execute/skip a block of code based on a condition.

// The syntax of the if statement is:

// if (condition) {
//     // Block of code
// }

//Note: The code inside { } is also called the body of the if statement.


//The syntax of the if...else statement is:

// if (condition) {
//     // Block of code to execute if the condition is true
// }
// else {
//     // Block of code to execute if the condition is false
// }


let qty : number = 10;

if(qty > 3)
    {
        console.log('positive qty')
    }

else if(qty < 3)
{

    console.log('low quantity')
}

else {

    console.log('ZERO qty')
}


//// Program to check if the student passed

let score : number = 10

if(score >= 40)
{
    console.log('Passed the exam')
}
else{
    console.log('Did not pass')
}
console.log('code after if out of if body')


/**TypeScript else if Statement
The else if keyword is used to check for additional conditions if the initial if statement is false.

The syntax of the else if statement is:

// Check for first condition
if (condition1) {
    // if body
}

// Check for second condition
else if (condition2){
    // else if body
}

// If no condition matches
else {
    // else body
} */


let marks: number = 65;

if (marks > 60){
    console.log('first divison')
}
else if(marks >= 40 && marks < 60){
    console.log('second divison')
}
else {
    console.log('third divison')
}

//multiple else if

let scores: number = 85;

// Condition for passing with second division
if (scores >= 40 && scores < 60) {
    console.log("Second division");
}
// Condition for passing with first division
else if (scores >= 60 && scores < 80) {
    console.log("First division");
}
// Condition for passing with distinction
else if (scores >= 80 && scores <= 100) {
    console.log("Distinction");
}
// Condition for failing the exam
else if (scores > 0 && scores < 40) {
    console.log("You failed the examination.");
}
// If all conditions fail, the score is invalid
else {
    console.log("Invalid score!");
}

// Output: Distinction


//---------------------------------------------------------

//Nested if...else Statement
// When we use an if...else statement inside another if...else statement, we create a nested if...else statement. For example,

let score2: number = 60;

// Outer if...else statement
// Student passed if score 40 or above
// Otherwise, student failed

if (score2 >= 40) {

    // Inner if...else statement
    // Distinction if score is 80 or above

    if (score2 >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}

// Output: Passed



// Get user input from prompt(), which returns either string or null data
//const userInput: string | null = prompt("Enter your exam score:");

// // Check if user input is null
// if (userInput === null) {
//     console.log("Null input given!");
// }
// // Else, convert input to integer and check condition
// else {
//     let score1: number = parseInt(userInput);

//     // Check if the user passed or failed
//     if (score1 >= 40)
//         console.log("pass");
//     else
//         console.log("fail");
// }

// Nested Ternary Operators
// You can also nest one ternary operator as an expression inside another ternary operator. For example,

// Program to check if the number is positive, negative, or zero
let anum: number = 3;
let result1: string = (anum >= 0) ? (anum == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result1}.`);
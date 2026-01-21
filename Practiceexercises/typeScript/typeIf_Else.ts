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
let score_2 : number =49
if(score_2 >45 ){

    console.log('Student passed')
}
else{
    console.log('Student not passed')
}


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


//Largest of Two Integers

let num01: number = 40 , num02 :number =50

if(num01>num02){

    console.log(num01)
}
else {
    console.log(num02)
}

//Sign of Product of Three Numbers

// Sample numbers : 3, -7, 2

// Output : The sign is -

let no_1:number=3,no_2:number=-7,no_3:number =2;

if(no_1*no_2*no_3 > 0){

    console.log('sign is +')
}
else {console.log('sign is -ve')}

/**parseInt(num1, 10) is a JavaScript function call 
 * that converts the value of num1 into an integer, using base 10 (decimal) for interpretation.
 * parseInt("42", 10);   // returns 42
parseInt("3.14", 10); // returns 3 (stops at decimal point)
parseInt("101", 2);   // returns 5 (binary to decimal)
parseInt("FF", 16);   // returns 255 (hexadecimal to decimal)
 */
//Sort Three Numbers
// Sample numbers : 0, -1, 4

// Output : 4, 0, -1

let no1:number=10,no2:number=91,no3:number =4;

if(no1 > no2 && no1 > no3 ){

    if(no2>no3){

        console.log(`${no1} is > ${no2} is >${no3}`)
    } else{
        console.log(`${no1} > then ${no3} is > ${no2}`)
    }
}else if(no2>no1 && no2 > no3){

    if(no1>no3){
        console.log(`${no2} is > ${no1} is >${no3}`)
    } else {
          console.log(`${no2} > then ${no3} is > ${no1}`)
    }
} else if(no3>no1 && no3 >no2){
    if(no1 >no2) {
        console.log(`${no3} is > ${no1} is >${no2}`)
    } 
    else{
          console.log(`${no3} > then ${no2} is > ${no1}`)
    }
}


// above program can be written using array 
let x:number=10,v:number=91,n:number =4;

let arr: number[]=[x,v,n]

console.log(arr)

 arr.sort((a,b)=>a-b)
 console.log(arr)
  
 console.log('largest is',arr[arr.length-1])
 // program to find largest of 5 numbers  using above sort and print last index lenght -1
arr.sort((a,b)=>b-a)
console.log(arr)
 console.log('smallest is',arr[arr.length-1])
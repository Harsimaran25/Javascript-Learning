// Test your JavaScript Array knowledge
// Create an array called expenses that contains at least 5 different expense amounts.

// Calculate the total expenses by summing all the elements of the array.

// Find the highest and lowest individual expenses within the array.

let expense=[110,33,2,39,4114,500];
// sum=0;
// //using for loop
// for (i=0;i<expense.length;i++){
      
// console.log(expense[i])
//     sum=sum+expense[i]

// }
//let sum =expense.reduce((a,b)=>a+b,0);
//console.log(sum);

// to print largest in the array
//ternary operator condition ? expressionIfTrue : expressionIfFalse;
let highest=expense.reduce((max,current)=>current>max ? current : max,expense[0]);
let lowest= expense.reduce((low,current)=>current<low ? current : low,expense[0]);
//or using math function - let lowest= Math.min(...expense);//The ...numbers syntax spreads the array into individual arguments for Math.min.


console.log(highest);
console.log(lowest);

// print odd or even using ternary operator
i=0;
let type= expense.filter(num=>num % 2===0)
console.log(type);
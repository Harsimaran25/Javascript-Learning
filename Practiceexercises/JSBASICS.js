//In JavaScript, we use the var or let keywords to declare variables 
// For example,
 var street;
 let name;
// Here, age and name are variables.
//We use the assignment operator = to assign a value to a variable
// declare variable num
let num;
// assign 5 to num
num = 5;
// declare variables num1, num2, and num3
// assign values 5, 6, and 7 respectively
let num1 = 5, num2 = 6, num3 = 7;

//The value of a variable may vary. Hence, the name variable.
// assign 5 to variable score
let score = 5; 
console.log(score); // 5

// change the value of score to 3
score = 3; 
console.log(score); // 3

//Variable names are case-sensitive. So age and Age are different variables. For example,
let age = 23;
let Age = 20;

console.log(age); // 23
console.log(Age); // 20
// You can name the variables any way you want. However, we recommend you use the following naming conventions:

// In JavaScript, variables are generally named in camelCase format if they have multiple words.

// For example, firstName, annualSalary, numberOfBooks, etc.

// A constant is a type of variable whose value cannot be changed.

// In JavaScript, we use the const keyword to create constants. For example,

// assign 5 to num 
const num8 = 5;

//In JavaScript, you can combine strings and variables in console.log() using the following methods:
let count = 5;

console.log("There are %d items in your basket.", count);
// In this example, we used the substitution string %d in console.log() to insert the value of the count variable into the printed message.

// Here, %d is a placeholder for a decimal or integer number.

let count2 = 15;

// use template literals
//We enclose a message inside two backticks ` ` to utilize template literals
let message = `There are ${count2} items in your basket.`;
console.log(message);
//Here, we inserted the value of the count variable inside the message using the code ${count}.
let name2 = "Alice";

let greeting = `Hello ${name2}`;

console.log(greeting); 

// We can use template literals 
// to embed JavaScript expressions or variables with the help of the ${...} syntax. For example,
let number1 = 8;
let number2 = 3;

// embed expression within template literal 
// In this template literal,

// ${number1 + number2} is the embedded expression.
// ${number1} and ${number2} are the embedded variables.
let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result);


// valid codes
// mix quotes to avoid errors
let string11 = 'A "quote" inside a string';  
let string12 = "Another 'quote' inside a string";



// invalid codes as below cannot use same quotes 
//string1 = 'A 'quote' inside a string';  
//string2 = "Another "quote" inside a string";  


// valid code after using escape characters
string4 = 'A \"quote\" inside a string'; 
string5 = "Another \'quote\' inside a string"; 

let string1 = `This is a string with a 'single quote' in it.`; 
let string2 = `This is a string with a "double quote" in it.`;  

console.log(string1);
console.log(string2);
console.log(string4);
console.log(string5);

// multiline strings using template literals
let address = `123 Main St.
San Francisco, CA
94105`;

console.log(address);
//In JavaScript, undefined represents the absence of a value
let names;
console.log(names);  // undefined

//It is also possible to explicitly assign undefined as a variable value. For example,
let nameu = undefined;
console.log(nameu);  // undefined
// You should avoid explicitly assigning undefined to a variable.
//  Usually, we assign null to variables to indicate "unknown" or "empty" values.

// A Symbol is a unique and primitive value. This data type was introduced in ES6.
// When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, 
// even if they have the same descriptions. For example,

// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");

console.log(value1 === value2);  // false

// JavaScript Object
// An Object holds data in the form of key-value pairs. For example,

let student1 = {
    firstName: "John", //Key is firstName		Value is   "John"
    lastName: null,
    class: 10
}; 

//You can use the typeof operator to find the data type of a variable
let number = 4;
console.log(typeof(number));  // number

let valueChecked = true;
console.log(typeof(valueChecked));  // boolean

// Notice that typeof 
// returned object for the null type. This has been a known issue in JavaScript since its first release.
let a = null;
console.log(typeof(a));  // object

// JavaScript can also represent special numeric values such 
// as Infinity, -Infinity, and NaN (Not-a-Number). For example,

let numberd1 = 3 / 0;
console.log(numberd1);  // Infinity

let numberd2 = -3 / 0;
console.log(numberd2);  // -Infinity

// strings can't be divided by numbers
let numberd3 = "abc" / 3; 
console.log(numberd3);  // NaN

// Addition Assignment	a += 5;  // a = a + 5
// -=	Subtraction Assignment	a -= 2;  // a = a - 2
// *=	Multiplication Assignment	a *= 3;  // a = a * 3
// /=	Division Assignment	a /= 2;  // a = a / 2
// %=	Remainder Assignment	a %= 2;  // a = a % 2
// **=	Exponentiation Assignment	a **= 2;  // a = a**2
let v = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
v += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
v -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
v *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
v /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
v %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
v **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);


// ===	Strictly equal to	3 === "3" gives us false
// !==	Strictly not equal to	3 !== "3" gives us true
// The equality operators (== and !=) convert both operands to the same 
// type before comparing their values. For example,

console.log(3 == "3");  // true

// Difference between the == and === operators.
// The == (equality) operator only checks the values of the operands and not their types. For example,

// However, the === (strict equality) operator checks both the values and types of the operands. For example,



// However, the strict equality operators (=== and !==) 
// do not convert operand types before comparing their values. For example,

console.log(4 === "4");  // false


//  the for loop is used for iterating 
//  over a block of code a certain number of times, or to iterate over the elements of an array.

//for...in loop iterates over the keys of an object as below
const student = {
    name: "Monica",
    class: 7
};



//Syntax of JavaScript for...in Loop
// for (key in object) {
//     // body of for...in
// };
// loop through the keys of student object
// Here, the for...in loop iterates over the keys of the student object. 
// In each iteration of the loop, the key variable stores a single key belonging to student.
for (let key in student) {

    // display the key-value pairs
   //console.log(`${key} => ${student[key]}`);
    console.log(key ,":", student[key]);
};

//Example: JavaScript for...in Loop
const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
};

// use for...in to loop through
// properties of salaries
for (let i in salaries) { 

    // access object key using [ ]
    // add a $ symbol before the key
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i}: ${salary}`);
};
//In the above example, we used the for...in loop to iterate over the properties of 
// the salaries object. Then, we added the string $ to each value of the object.
//Note: We have used the variable i instead of key because we can use any valid variable name.
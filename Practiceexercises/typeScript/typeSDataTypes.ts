//to understand basic data types in typescript

// Types	             Description	                                       Examples

// Primitive	        Basic types that can hold a single value.	           Strings, numbers, booleans, undefined, null.
// Non-Primitive	    Can hold a collection or a more complex structure.	   Objects, arrays, tuples, enums, any, void, never, unknown.



//Special Numeric Values
let integerNumber: number = -3; 
console.log(integerNumber); 

let floatNumber: number = 3.15; 
console.log(floatNumber); 

// Division by zero results in Infinity
let number1: number = 3 / 0;
console.log(number1); 

// Negative division by zero results in -Infinity
let number2: number = -3 / 0;
console.log(number2);  

// Non-numeric operations result in NaN(Not-a-Number)
let number3: number = Number("abc") / 3;
console.log(number3);

//--------------------------------------------------------------------
//TypeScript String

// String enclosed within single quotes

let NAME: string = 'Bhai';
console.log('NAME is',NAME)

// String enclosed within double quotes
let language: string ="Typescript";
console.log('language is',language)

// String enclosed within backticks
let country: string =`USA`;
console.log(country)


//----------------------------------------------------------------
//TypeScript Boolean

let tapOn: boolean = true;  // in JS let tapOn= true

console.log('value of tapOn',tapOn)
//Note: If you wrap true or false in a quote, then they are considered as a string
let a = 'true';
console.log(typeof a); // string

//TypeScript Boolean With Comparison Operators

let ageOne: number= 20;
// Check if age is greater than or equal to 18
let isAdult: boolean = ageOne >= 18;  //Here, age >= 18 evaluates if age is greater than or 
// equal to 18 and assigns the result (true or false) to isAdult.
console.log('isAdult?',isAdult);


//TypeScript Boolean With Logical Operators

let age2: number = 18;
console.log('type of age2', typeof age2)
console.log('type of age2', typeof(age2))
// Assign boolean value 'true' to hasConsent
let hasConsent: boolean = true;

let canDrive: boolean = age2 >= 16 && hasConsent; 
console.log(canDrive);  // true
/**In the above program, age >= 16 && hasConsent checks if age is greater than or equal to 16 and if hasConsent is true.

Here, the value of age >= 16 is true. Since both age >= 16 and hasConsent are true, the value of canDrive is also true. */


//TypeScript Boolean() Function -The Boolean() function is used to convert various data types to boolean values

let b: string ='somevalue';
console.log('b is ',b)
console.log('b in boolean function',Boolean(b))


//Everything with a value returns true. For example,

let result: boolean;

//convert a positive number to boolean

let num2: number =10;
console.log('number is',num2)
result=Boolean(num2)
console.log('result of num2',result)
console.log(typeof result);

result=Boolean(-30)

console.log(typeof result);
console.log('result ',result)

// Convert a string to boolean
result = Boolean("hello");
console.log(result); // true

// object
let obj={a:1};

result=Boolean(obj)
console.log(result);

//In TypeScript, undefined, null, 0, NaN, '' converts to false. For example,
let result2: boolean;

// Convert empty string to boolean
result2 = Boolean('');
console.log(result2); // false

result2=Boolean(null)
console.log(result2);// false



//-----------------------------------------------------------------------------

// Boolean Objects
// You can create a boolean object using the new keyword. For example,
let aa: boolean = true;

// Create a boolean object
let bb = new Boolean(true);

console.log(aa); // true
console.log(bb); // [Boolean: true]

console.log(typeof aa); // "boolean"
console.log(typeof bb); // "object"


//TypeScript null --> In TypeScript, the null data type represents an intentional absence of any value. For example

let userId: null;
userId=null // setting the value to null explicitly

console.log(userId)


//TypeScript Array
//An array stores multiple elements in a single variable and can hold elements of any type.
let itemsQty: number[] = [10,13,90,39,100]
console.log('array is',itemsQty, 'type is', typeof(itemsQty))

//array of type strings

let items: string[] =['brush','table','chair','cup']
console.log(items)


// TypeScript Tuple
// A tuple in TypeScript is a type of array where each element has a specific, predefined type. For example,

let userDetails: [string,number]= ['Bhai', 420]
console.log(userDetails)

//TypeScript any
//In TypeScript, the any type allows a variable to hold any type of value without strict type checking. For example,

// Initially, TypeScript interprets the anything variable as a string
let anything: any = "I can be anything!";
console.log(anything);

// Now it's a number
anything = 42;
console.log(anything);

// Now it's a boolean
anything = false;
console.log(anything);
//NOTE:The any type is very flexible but less safe because it bypasses TypeScript's type safety features.AVOID using it

//TypeScript unknown
/*In TypeScript, the unknown type is similar to any but is safer, since it requires you to perform some 
type of checking before performing operations on such values.*/
let value: unknown = "Hello, TypeScript"; // Value is unknown

// Direct operations on 'unknown' type are not allowed
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'.

// Correct usage requires type checking
if (typeof value === "string") {
    console.log(value.toUpperCase()); 
}

/**In the example, we start with a variable value of type unknown, which means TypeScript doesn't yet know what type of data it holds.

So, before using value, we check if it's a string in order to perform string operations on it. If we don't, we'll get an error. */

/**TypeScript void
In TypeScript, the void type indicates that a function does not return any value. For example, */

function greet(): void{
    console.log('Hello this is function with return type as void')
}

//call the function
greet();
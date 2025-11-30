// continue more about variables in typescript

//Change the Value of Variables

let clydeKing : string = 'Bhai'
console.log('value of clydeKing is: ', clydeKing)

//reassign or change the value of variable 

clydeKing='BhaiJaan'
console.log('now value of clydeKing is ',clydeKing)

//lets see Naming convention  or rules for naming typescript variables

// 1.Variables name must start with a letter , an underscore _ , or dollar sign $

let age: string = 'thirty';
let _age: number= 20;
let $age: number= 30;

//2. Variables cannot start with numbers.
//let 20age: number = 20; // This gives an error ERR_INVALID_TYPESCRIPT_SYNTAX

// Case-Sensitive - 3. Variable names are case-sensitive. So age and Age are different variables.

let Marks: number=40;
console.log(Marks)
let marks: number =50; 
console.log(marks)

/**Recommended ways to name a variable in TypeScript.
You can name variables any way you prefer. However, we recommend using the following naming conventions:

In TypeScript, variables are generally named in camelCase format if they have multiple words.

For example--> firstName, annualSalary, numberOfBooks */
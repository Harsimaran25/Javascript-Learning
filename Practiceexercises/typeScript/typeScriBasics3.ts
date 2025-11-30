// lets now learn about  Typescript Constants
//A constant is a type of variable whose value cannot be changed.

//In TypeScript, we use the const keyword to create constants

const streetName: string = 'Mill Ct'

const AGE: number = 40;

// once const is assigned a value we cannot change it 

//AGE =50; // this will give - TypeError: Assignment to constant variable Cannot assign to 'AGE' because it is a constant


//Always Initialize a Constant During Declaration

//If you don't initialize a constant at the time of declaration, it throws an error. For example

// const nameUser: string;  // error 'const' declarations must be initialized

// nameUser='ABC'
//Note: If you're sure that the value of a variable won't change throughout the program, we recommend you use const
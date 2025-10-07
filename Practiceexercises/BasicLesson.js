/**any interaction we have with web pages is because of JavaScript the
buttons you are clicking, birthday cards you are creating, and calculations you are
doing. Anything that requires more than a static web page needs JavaScript*/

/*Variables Variables are values in your code that can represent different values each
time the code runs */
//declare variable - you need a special word for that: let, var, or const

/**var has global scope and let has block scope. var's global scope means that you can
use the variables defined with var in the entire script. On the other hand, let's block
scope means you can only use variables defined with let in the specific block of code
in which they were defined 

JavaScript is a loosely typed language. This means that JavaScript determines the type based on the value 
The type does not need to be named explicitly. For example, if you declared a value of 5,
JavaScript will automatically define it as a number type.

JavaScript has seven primitives: String, Number, BigInt, Boolean, Symbol, undefined,
and null.*/

var firstName = "Bhaijaan";
let lastName = "ClydeKing";
let language = "JavaScript";
let message = 'let"s learn';
let message2 = `let"s learn ${language}`;
console.log("fullname is ", firstName + " " + lastName); // to print at terminal
console.log(`fullname is ${firstName} ${lastName}`);
console.log(message);
console.log(message2);
//we can also declare variables like below

var age, dateOfBirth;
let address, email;

age = 25;
dateOfBirth = "12/12/1908";
address = "11 bhakha st";
console.log(age, address);

age = 27; // reused same variable name but reassigned/reinitalised it with another value,
//  assigned a new value while the code is running
address = "13 magha";
console.log(age, address);

//constants are defined using keyword const
const occupation = "AEM PROLEVEL";
console.log("occupation is" + occupation);

/*data types JavaScript has seven primitives: String, Number, BigInt, Boolean, Symbol, undefined,
and null.*/

let middleName = "Mpower"; //string
let area = "Bhakha"; //string
let isMaghin = true; //boolean data type
let isSingle =
  null; /* null is a special value for saying that a variable is empty or has an unknown
value. This is case sensitive*/
let numberOfBeetles = undefined; /* variable that has
not been assigned a value. And this data type is undefined ,manually assigning
undefined is a bad practice*/

console.log(typeof middleName);
console.log(typeof area);
console.log(typeof isMaghin);
console.log(typeof isSingle);
console.log(typeof numberOfBeetles);

//escape characters
let str1 = "Hello , what's bhai's game? is it \"maghin\"?";
console.log(str1);
let str2 = 'is bhai\'s game ?"magin"';
console.log(str2);

/*Symbol can be used when it is
important that variables are not equal, even though their value and type are the same
(in this case, they would both be of the symbol type)*/

let str3 = "JavaScript is fun!";
let str4 = "JavaScript is fun!";
console.log("These two strings are the same:", str3 === str4); /*They have the
same value, and the same type*/

let sym1 = Symbol("Bhai is Maghin");
let sym2 = Symbol("Bhai is Maghin");
console.log("These two Symbols are the same:", sym1 === sym2);

let notGoodidea = undefined;
let lstName;
console.log("using undefined:", lstName === notGoodidea);

let goodIdea = null;
let fstName;
console.log("using null", fstName === goodIdea);
/*This shows that an automatically undefined variable, lstName, and a deliberately
undefined variable, notGoodidea, are considered equal, which is problematic.
On the other hand, fstName and goodIdea, which was explicitly declared with a
value of null, are not equal.*/

let item = "cup";
let price = "$50";
let msgprice = " the price of the " + item + " is " + price;
let msg2 = `the price of the  ${item} is ${price}`;
console.log(msgprice);
console.log(msg2);

/**any interaction we have with web pages is because of JavaScript the
buttons you are clicking, birthday cards you are creating, and calculations you are
doing. Anything that requires more than a static web page needs JavaScript*/

//Variables

var firstName = "Bhaijaan";
let lastName = "ClydeKing";

console.log("fullname is ", firstName + " " + lastName); // to print at terminal
console.log(`fullname is ${firstName} ${lastName}`);

//we can also declare variables like below

var age, dateOfBirth;
let address, email;

age = 25;
dateOfBirth = "12/12/1908";
address = "11 bhakha st";
console.log(age, address);

age = 27; // reused same variable name but reassigned/reinitalised it with another value
address = "13 magha";
console.log(age, address);

//constants are defined using keyword const
const occupation = "AEM PROLEVEL";
console.log("occupation is" + occupation);

//data types

let middleName = "Mpower"; //string
let area = "Bhakha"; //string
let isMaghin = true; //boolean data type
let isSingle = null; //null does not have a value
let numberOfBeetles = undefined; //undefined is like it does not exist

console.log(typeof middleName);
console.log(typeof area);
console.log(typeof isMaghin);
console.log(typeof isSingle);
console.log(typeof numberOfBeetles);

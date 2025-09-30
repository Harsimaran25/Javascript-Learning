// lets see how to create objects in java script like dog it will have attributes or properties like breed height etc
// //We can recognize that this is an object by seeing the { and }. In between the curly braces, we see a bunch 
// // of properties and their values. like key : value pairs 
// The syntax of JavaScript object is:

// const objectName = {
//     key1: value1,
//     key2: value2,
//     ...,
//     keyN: valueN
// };
// let dog ={
// dogname: 'dog1',
// weight: 20,
// breed:'bhai',
// mates:'true'

// };
// Note: You can also create objects in a single line. For example,

// const person = { name: "John", age: 20 };
// let car={

//     carname:'BMW M',
//     speed:"Bhakhin",

// };

//We can also include functions inside an object. For example,

const personq = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};
//These functions that are defined inside objects are called methods.

//A nested object contains another object as a property. For example,
// outer object student
const student = {
    name: "John",
    age: 20,

    // contains another object marks
    marks: {
        science: 70,
        math: 75
    }
};


// // to access any property of this object we can do as below
// //let val= dog["breed"];
// //another way is 
// let val=dog.breed;
// console.log(val);
// val=dog.mates
// console.log(val);
// dog['breed']='bhakha';
// console.log(dog);
// console.log(dog['dogname']);
// dog['breed']='dachshund'
// console.log(dog);


/// another object
//object is collection of properties - properties can be function or strings or numbers or arrays
let person={
    firstname:'Bhakha',
    lastname:'MPOWER',
    age:30,
    address: function(){
      console.log( this.firstname+this.lastname+"Clydeking")
    }
};

console.log(person.firstname);
console.log(person.address())
console.log(person['firstname']);// we give quotes as the firstname is string
// to add another property to object
person.gender='Male';
console.log(person);
delete person.gender;
console.log(person);
// now IN keyword can be used to check if some property is present for object or not 
console.log('gender' in person); // this will return either true or false based on the presence of property
person.gender='Male';
console.log('gender' in person);

// now if we want to access values for keys(properties) of the object we can iterate using for loop
for(key in person){

    person[key]; //now here it is like person['firstname']
    console.log("printing person values"+person[key]);
}
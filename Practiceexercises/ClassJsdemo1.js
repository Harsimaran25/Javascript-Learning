// In JavaScript ES6 introduced classes
//  classes provide a way to create blueprints for 
// objects, similar to traditional object-oriented programming languages like C++ or Java.
// Let's explore a simple example by creating a Person class:
// define a class named 'Person'
// In JavaScript, we create a class using the class keyword. For example,
// create a class
// class Person {
//     // body of class
// };
   // Class Constructor
// A class constructor is a special method
//  within a class that is automatically executed when a new object of that class is created.

class Person {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person1.greet();
person2.greet();

// In the above example, we have defined a Person class using the class keyword.

// Inside Person, we have defined:

// a class constructor that initializes the name and age properties
// a greet() method that displays a greeting message using the name and age properties.
// Using the new keyword, we have created two objects of the Person class- person1 and person2.

// We have then called the greet() method on person1 and person2 using the . operator:

// person1.greet() - calls greet() on person1
// person2.greet() - calls greet() on person2
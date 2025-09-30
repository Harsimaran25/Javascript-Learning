// Class Inheritance
// Inheritance enables you to define a class that takes all the functionality
//  from a parent class and allows you to add more.
// Using class inheritance, a class can inherit all the methods and properties of another class.
// Inheritance is a useful feature that allows code reusability.
// To use class inheritance, you use the extends keyword. For example,

// parent class OR Superclass
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
       // console.log('Hello,', this.name);
    }
}

// inheriting parent class - child or subclass
class Student extends Person {

}

let student1 = new Student('BHAI');
student1.greet();
// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create an instance
const person1 = new Person("Alice", 30);

// Access properties directly
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30

// Call method
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Modify properties directly
person1.age = 31;
person1.name = "Alice Smith";

person1.greet(); // Output: Hello, my name is Alice Smith and I am 31 years old.

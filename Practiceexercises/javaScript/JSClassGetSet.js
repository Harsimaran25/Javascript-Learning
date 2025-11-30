//now same file JSClassNoGetSet.js but using get and set

class Person {
  constructor(name, age) {
    this.name = name; // Convention: use underscore for private-like fields
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name.");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Invalid age.");
    }
  }

  // A method
  greet() {
    console.log(
      `Hello, my name is ${this._name} and I am ${this._age} years old.`
    );
  }
}

// Create an instance
const person1 = new Person("Alice", 30);

// Access using getters
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30

// Modify using setters
person1.name = "Alice Smith";
person1.age = 31;

// Invalid examples (won't change values)
person1.name = ""; // Output: Invalid name.
person1.age = -5; // Output: Invalid age.

person1.greet(); // Output: Hello, my name is Alice Smith and I am 31 years old.

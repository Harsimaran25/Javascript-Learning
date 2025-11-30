//parent class

class ParentClassJs {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("hello", this.name);
  }
}

export default ParentClassJs;

//create object or instance of class

let p1 = new ParentClassJs("bhai", 35);

console.log(p1.age);
p1.greet();

//child class

import ParentClassJs from "./ParentClassJs.js";

class ChildStu extends ParentClassJs {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }

  //method

  printMarks() {
    console.log("Marks are", this.name, this.age);
  }
}

let st = new ChildStu("bhaijaan", 35, 100);

st.printMarks();
st.greet();

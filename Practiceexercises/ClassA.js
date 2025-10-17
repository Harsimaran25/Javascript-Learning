// lets create a class with getter and setter methods

class CARS {
  constructor(name, model, range) {
    this.name = name;
    this.model = model;
    this.range = range;
  }

  //getter method are used to get the value of a property
  get carname() {
    return this.name;
  }

  get carmodel() {
    return this.model;
  }

  //setters are used to set the value of a property
  set carmodel(x) {
    this.model = x;
  }
}

//parent class

class ParentClass1{

    public name: string;
  public age: number;
constructor(name:string,age:number){

    this.name=name;
    this.age=age;
}

greet():void {

    console.log('hello' ,this.name)
}

}

export default ParentClass1

//create object or instance of class

let p1:ParentClass1=new ParentClass1('bhai',35);

console.log(p1.age);
p1.greet();

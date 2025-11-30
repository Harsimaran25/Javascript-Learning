//child class
import ParentClass1 from './ParentClass1.ts';


class studentOne extends ParentClass1 {

marks:number;

constructor(name:string,age:number,marks:number){

    super(name,age);
    this.marks=marks;
}

printMarks():void {

    console.log('marks of', this.name , ' are', this.marks)
}

}

//create object 

let student11 : studentOne = new studentOne('bhai',35,420)

student11.printMarks();

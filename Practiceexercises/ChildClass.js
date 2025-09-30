
const PersonBHAI= require('./Inherit2Demo');
  //   OR as below
//import{PersonBHAI} from "./Inherit2Demo.js"

class student extends PersonBHAI
{

    get location(){ //overridden so this one gets executed for child class

   return 'CLYDE'   ; 
}
    // constructor should be same as per parent class

    constructor(name)
    {
       super(name); // call parent class constuctor mandatory step1, value baijaan comes here then goes to parent class
    }


};

//lets create object
let stu1=new student('Baijaan')

stu1.greet();// greet method from parentclass
console.log(stu1.location);
module.exports =class Person // to use this class else where we can use module.exports=
{

name='Bhakha'; // class property not 

//location='Canada'
//Another  way to define property is to use keyword get ,property getter ,like below
get location(){ // this is NOT a FUNCTION 
    return 'Canada'
};

// lets see constructor 
constructor (namefirst,lastname)
{
 this.namefirst=namefirst; // instance properties or variables , there value change based on object 
 this.lastname=lastname;

}
// lets create method
//Class Method

// A class method is a function inside a class that defines behaviors for the class's objects.
fullname()
{

    console.log(this.namefirst+this.lastname)
}

};  // end of class

// //lets create object of person
// //let person1=new Person();// object creation
// let person2=new Person("bhai","udai");
// let person3= new Person("mpow","clydeking") // object is instance of the class
// person2.fullname();
// console.log(person2.name);
// person3.fullname();
// console.log(person1.name); // object.property
// console.log(person1.location);
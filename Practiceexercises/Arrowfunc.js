//arrow functions
// Arrow functions are great for sending functions around as parameters and using shorter notations
//Arrow functions are a shorter way to write function expressions in JavaScript.

/*Arrow functions are useful whenever you want to write an implementation on the spot, such as 
 inside another function as an argument*/

//you will have to store it in a variable or send it in as an argument if you want to be able to use it

 //example 1
 let printValue=x=>console.log(x);

 printValue('Magha');  //calling the above arrow function

 //The forEach() method of Array instances executes a provided function once for each array element.
 // forEach() runs the function on each element in the array.but it doesn't return anything – it always returns undefined.

 let k=[1,45,67,78,56];

 let g=k.map(e=>e*2);
console.log(g);

// double even numbers only

let num1=[4,3,6,8,33,22,90,44,50,34]

 let evensum= num1.filter(e=>e%2===0).map(e=>e*2); //doubleing evennumbers
 let even2= num1.filter(e=>e%2===0); // getting even numbers 
 console.log(even2);
 console.log(evensum);

 // arrow functions with Multiple lines (use curly braces and return)
// check if number is positive /-ve or 0



 let result= d=>{ if (d>0)

    return 'positive'
    else if (d<0){
       return 'negative'
    }
    return 'zero'

 }


 console.log(result(-100));
 console.log(result(-110));
 console.log(result(0));




 //A function that returns the length of a string.

 let strring='Bhakha'
 let lengthy= f=> f.length //implicit return

 console.log(lengthy(strring));

 



 //The includes() method of Array instances determines whether an array includes 
 // a certain value among its entries, returning true or false as appropriate.



//////////////////////////////////////////////////
 //Arrow functions:  Returning an object Wrap the object in parentheses () so JavaScript doesn’t 
 // confuse it with a function body.  examples below

 //A function that takes a name and age, and returns an object like { name: "X", age: Y }.

//   let zz= (a,b)=>{return {'name':a, 'age':b}}

//   console.log(zz('bhakha',11))

  //OR --> 
  let C= (name,age)=>({name,age}) // so JS knows that its object by{} and properties and assigns it values 

  console.log(C('magha',12));

  let BHAI=(name,Havelli,Mpower)=>({name,Havelli,Mpower})

 console.log(BHAI('Clyde king','Dasua','X5'));

 /////////////////////////////////////////////////////////

 //for...of loop  which is used to iterate over iterable objects like:strings,arrays, etc.


    //Example      -->  //get length of string without using length property

 let lengthprinter=str=>{
   let count=0
    for(let char of str)
    {  //console.log(char)
        count++
    }
      console.log('Length of String is :',count)
 }
 //This is different from for...in, which is used to loop over property names (keys) — not
//  what you want when iterating over strings.

 lengthprinter('BMWMPOWER');

 // lets print length of string using traditional for 

 let traditionalLenghtGetter=str=>{
    let lengthCounter=0;
for(let d=0;str[d]!=undefined;d++)//Strings in JavaScript are array-like, so you can access characters by index
{  lengthCounter++}
console.log(lengthCounter)
 }
 traditionalLenghtGetter('BHAI TOH BHAI HAI');

 /////////
 //using while loop

  let whileLenghtGetter= str=>{ let ii=0,l=0;
    while (str[ii]!=undefined)
  {ii++;
   l++
  }
  console.log('length using while is '+l)}

  whileLenghtGetter('BHAKHA');

  ///
  //Get even numbers from an array
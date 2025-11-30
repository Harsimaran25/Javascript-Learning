const { type } = require("os")

//these are comments 
console.log("This is how you print on console in Javascript")
// to run this go to terminal make sure u r in path where this file is
// then give command node filename
// in java script usually no need to declare data type it smartly interprets during run time
//but still good practice to use keyword Var
a=4
c="MPOWER Bhakhin"
console.log(a +" "+ c)
var d=456
var text="this is \"X5\" mpower"
console.log(text)
console.log("value of d is "+d)
//now in ES6 engine LET and Const keywords were introduced as Var keyword has some shortcomings
// let is keyword to tell JS that we are declaring a variable like below
let counter=0
console.log("Counter is :"+counter)
counter+=1
console.log("Counter is :"+counter)
// inbuilt function to check what type of data type : typeof
console.log("the data type of counter is " +typeof(counter))
let sometext="this is some text or string data type"
console.log("the data type of sometext is " +typeof(sometext))
console.log(typeof 4.5)
console.log(typeof "text")
// lets check boolean
let required=true
console.log("the data type of required is " +typeof(required))
//now Var is like re-assignment lets see in example below, with var re-assignment works 
// we have used var1 two times but if var1 was declared using let keyword then we will get error
// so redeclaration cannot be done using Let keyword but possible with Var
var var1=45    // we cannot have let var1=45 and let var1=67 cannot redeclare
console.log(var1)
var var1=67
console.log(var1)

//but re-assignment works with let for example as below
let P="Parrot"
console.log("value of P at let"+P)
//now lets see re-assignment in action
P=5+6 // P now holds sum 
console.log("value of P now"+P) // so now we have used P twice
// now let us see Const  Keyword which stands for Constant, 
// the const value will stay unchanged throughout life of program

//template literal
text=`half of 100 is ${100 / 2}` /* this ${} is template literal and is inside backtick
quote When you write something inside ${} in a template literal, its result will be
computed, converted to a string, and included at that position*/
console.log(text)

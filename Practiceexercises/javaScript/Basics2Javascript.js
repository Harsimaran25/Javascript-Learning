// This is to  further revise the Java script Basics

console.log('This is first line')

console.log("/////////////////////////////")
//A JavaScript variable is a container for storing data. h is variable and value is 55
// let is keyword to declare variable
let h=55

console.log('Value of h is' ,h)

console.log("/////////////////////////////")

console.log('Let us see some Var keyword example')

let name4='Bhai'
var name2='Uchhjaatipandit'
var name3=`${name4} ${name2}` // template literal
console.log(`name is storing ${name4}`) // template literal inside two backticks

console.log('name3 stores : ',name3)

let BigNum; // declare variable num
BigNum=123000 // assign 123000 to BigNum

let num4=7,num33=898 //multiple variable declare in single statment

console.log('num4 is ',num4)
num4=77
console.log('num4 is now ',num4)


const jj=90

console.log('value of const cannot be changed',jj)

console.log('//////////////////object example ///')
//An Object holds data in the form of key-value pairs
let studentDetails={
    firstName:'Bhai',
    lastName:'King',
    address:'Mill cct'
}
// firstname is key with value as Bhai

console.log(studentDetails)
console.log(studentDetails.firstName)

//How can you check the data type of a variable?
 let name00='Bhakha'
 console.log(typeof(name00), 'is type for name00')

 let kcount=1
 console.log('increment is',++kcount)
  console.log('increment is', kcount++)
  console.log(kcount)
  console.log('assignment operator', kcount+=3) //// kcount = kcount + 3

  //JavaScript Logical Operators We use logical operators to perform logical operations on boolean expressions

  console.log('&& is the logical operator AND')

  const j1=7,j2=3;

  console.log((j1<8)&&(j2>1))  // Output: true


  


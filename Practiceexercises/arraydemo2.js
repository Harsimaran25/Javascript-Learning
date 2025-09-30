//create a new array to pick even numbers from it
let array1=[19,10,20,33,44,55,36];
//let evenarray=[];
// one way is to use for loop
// for(i=0;i<array1.length;i++)
//     {
       
//   if (array1[i] % 2==0){

//  evenarray.push(array1[i]);

//   }
  
// }
// console.log(evenarray);
// we could use filter method 
let evenarray=array1.filter(evennum=>evennum%2==0) ;//even num will store all the even elements its new variable
// filter will return elements which only match the condition 
console.log(evenarray);

//another function is MAP used with arrays like to replace new values with old in array
// lets consider example where from above array evenarray we want to multiply each number by 3 then we can use Map to 
//avoid lengthy code of for and if loop and use MAP  like below
//map for every element will send new value in multiplier for each element in array so there is no condition to validate
let newmappedarray=evenarray.map(multiplier=>multiplier*3);
console.log(newmappedarray);
let totalnew=newmappedarray.reduce((sum,val)=>sum+val,0);
console.log(totalnew);

console.log("&***************");
console.log("chaining to impletment above code to avoid multiple lines of code let us do above example in one line");
let newmarks=[12,10,48,49,90,30];

let finalarray=newmarks.filter(num=>num%2==0).map(num=>num*3).reduce((sum,num)=>num+sum,0);
console.log(finalarray);
// sorting of Arrays - Number array and String array
// lets start with string array
let fruits=["banana","berry","orange","cherry","apple","kiwi","raspberry"];
// can use Sort function direclty
fruits.sort();
console.log(fruits);
//now to sort strings we need to use some logic like bubblesort 
let unsortedarry=[3,19,4,99,55,2,6,65];
console.log(unsortedarry.sort((a,b)=>a-b)); //comparing difference of each element
//above is like writing unsortedarry.sort(function(a,b){ return a-b })
// array can hold any types of value
let mixedarray=["Bhai","mpower",11,"mill"];
console.log(typeof mixedarray[0]+" "+typeof mixedarray[2]);
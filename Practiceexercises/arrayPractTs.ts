//Arrays practice in Typescript

const fruits :string[] = ['apple','grapes','banana','strawberry'];

//add element to array above at end use push

fruits.push('Blueberry','Lychee');

console.log('added' , fruits);
console.log('added' +' '+ fruits); //here it is gonna concatenate
//delete or remove element from  the array at end
fruits.pop();
console.log('after pop',fruits);


const numbersArray : number[] =[10,30,44,33,55,90];
//splice can add or remove and replace elements 
let spliced=numbersArray.splice(1,2); // remove 2 elements from index 1
console.log(spliced);
console.log('after splice',numbersArray);

// add element at start of array use unshift
numbersArray.unshift(12,14);
console.log('after unshift',numbersArray);

let splicedTwo:number[]= numbersArray.splice(2,1,100); //replace 1 element from index 2 with 100
console.log('splicedtwo is',splicedTwo);
console.log('after splice',numbersArray);
// remove element from the beginning of the array using shift
numbersArray.shift();
console.log('after shift',numbersArray);

//using splice to add elements
// adding elements without deleting existing elements
numbersArray.splice(3,0,109,108);//adding 109 aand 108
console.log('after splice add',numbersArray);

numbersArray.splice(2); // gonna remove all elements starting from index 2
console.log('after splice ed',numbersArray);

// lets us see example where the starting index is greater then lenght of array and how splice can append values to end without removing

let lengtharr:number= numbersArray.length
console.log(lengtharr);

numbersArray.splice(3,0,400,500); //as start index is > lengthdoes not delete anything and starts appending arguments to the end of the array.
console.log('after splice start >length',numbersArray);

// remove last element and add 3 more elements
numbersArray.splice(-1,1,43,23,449,900);

console.log('after splice start index < 0',numbersArray);//if start < 0 the index is counted from backward 

// using -2 which means second to last element 
numbersArray.splice(-2,0,430,489,99)
console.log('after splice start index 2nd last',numbersArray);//if start < 0 the index is counted from backward 

numbersArray.splice(-2,1,10,189,199)
console.log('after splice start index 2nd last',numbersArray)
numbersArray.splice(-2,2,39,18,19)
console.log('after splice start index 2nd last',numbersArray)
//let us see another method called SLICE

let newarr1 :number[]= numbersArray.slice(2); // slicing from the third element or index 2
console.log(numbersArray);
console.log(newarr1);
// if NO start index is provided  slicing the array (from start to end)
let newarr2:number[]=numbersArray.slice();
console.log('slice without parameter',newarr2)

// slicing from the second element to fourth element in slice Ending index of the selection (exclusive)
let newarr3:number[]=numbersArray.slice(1,4);
console.log(newarr3);

// using slice with -ve index
let newarr4:number[]= numbersArray.slice(0,-1) // so -1 means last element , -2 means second last element 
console.log('new arr4',newarr4);

let newarr5:number[]=numbersArray.slice(-3);// slicing the array from third-to-last till index 0 or start
console.log('new arr5',newarr5);

let newarr6:number[]=numbersArray.slice(3,-3);
console.log('new arr6',newarr6);
let newarr7:number[]=numbersArray.slice(-3,5);
console.log('new arr7',newarr7);//empty

let arr8:number[]= numbersArray.slice(-3,-5);
console.log('new arr8',arr8);//empty

//lets us see SPLIT method which is for STRINGS
//The split() method divides a string into a list of substrings and returns them as an array.

let sentence:string ='This is &* bhakha sentence %#$';

let split1:string[] =sentence.split('&'); // divides the string at &
console.log('split1 is' , split1);

let sentence2:string="Bhakhin is expert in :Java :react :angular :maghin";
let split2:string[]=sentence2.split(':') // divides the string at :
console.log('split2 is',split2);

let sentence3:string='Clydeking is expert in :react :angular :java: Js: CSS';
let split3:string[]=sentence3.split(':',2);
console.log('split3' ,split3);
// Array Demo
// we can declare array object using keyword new
let shoppinglist=["Milk","bread","apples"];
console.log(shoppinglist.length);
shoppinglist[1]="bananas";
console.log(shoppinglist);
shoppinglist.push("bhai");// adds item at end of array
console.log(shoppinglist);
// if we want to add items at certain index we can use splice
shoppinglist.splice(2,0,"M power","lineman");//The splice() method takes multiple parameters. The 
// first parameter, 2 in our case, is the index of the array on which we want to start 
// inserting. The second parameter, 0 in our case, is the number of elements we want to 
// delete starting at our previously defined starting index
console.log(shoppinglist);
shoppinglist.splice(2,1,"X5");
console.log(shoppinglist);
shoppinglist.splice(2,2,"M5");
console.log(shoppinglist);
//add another array to your array. This can be done with the concat() method
let arr1=[1,2,3];
let arr2=[4,5,6];
arr1=arr1.concat(arr2);
console.log(arr1);
// This concat() method can do even more! We can use it to add values as well. We can 
// add a single value, or we can comma-separate multiple values
let arr3=arr2.concat(7,8);
console.log(arr3);
// deleting first element of array use  shift method
//pop method , deleting from end 
// splice can be used to delete as well
arr3.splice(2,2);
console.log(arr3);
delete arr3[0];
console.log(arr3);
arr3.shift();
console.log(arr3);
arr3.push(5,6,7,8);
console.log(arr3);
arr3.sort();
console.log(arr3);
// multidimensional arrays - array of arrays example below
let arr01=[1,2,3];
let newa=arr01.map(b=>b*3);
console.log("NEWA"+newa);
let arr02=[4,5,6];
let arr03=arr01.map(b=>b*4);
let arrofarrys=[arr01,newa,arr03];
console.log(arrofarrys);
let arr04=[[1,2],[3,4]];
console.log(arr04);

//now to access elements of arrofarrys we need to use two indexes like [[1,,2,3][4,5,6]] so 1,2,3 are at index 0 and 4,5,6 are at index 1
let val=arrofarrys[0][1]; // this means The statement will grab the first array because it has an index position of 0. From this
 //first array, it will take the second value, because it has an index position of 1 so val will be 2
console.log(val);
val=arrofarrys[2][2]; // will print 8

console.log(val);
// lets do array of arrays of arrays
 let arrofarrofarr=[arrofarrys,arrofarrys,arrofarrys];
 
console.log(arrofarrofarr);
val=arrofarrofarr[0][2][1];// print 8


console.log(val);
val=arrofarrofarr[1][1][1];// 6
console.log(val);
val=arrofarrofarr[2][2][1];
console.log(val);
val=arrofarrofarr[2][2][2];
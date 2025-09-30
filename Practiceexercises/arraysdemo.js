// Array Demo
// we can declare array object using keyword new
let shoppinglist=["Milk","bread","apples"];
console.log(shoppinglist.length);
shoppinglist[1]="bananas";
console.log(shoppinglist);
shoppinglist.push("bhai");
console.log(shoppinglist);
let markks=new Array(10,30,44,88,80)
let marks2=Array(6);
//another way is using var
var marks=[20,49,47,88,90] // so these values start at 0 index, but when counting to get length we start counting from 1
// to display any particular element of array we can do as below
//marks[n] where n is index
console.log(marks[3])// will display 88
//now to update a particular value we can do
marks[4]=54 // this will update the value present at 4th index of marks array to 54
console.log(marks)
// u can use length function to print length of array
console.log(marks.length)// 5 is count
// now if you want to add value or element at end of array u can use method push
marks.push(39)// now 39 will be added at last 
console.log("++++++post adding++") 
console.log(marks) 
console.log(marks.length)
//add more
marks.push(57,89,69)
console.log("++++++post adding++") 
console.log(marks) 
console.log(marks.length)
// now if u want to delete value from array
//use pop method
marks.pop()// this will delete one value from end of the array
console.log("++++++post deleting++") 
console.log(marks) 
console.log(marks.length)
//now if you want to ADD value at beginning of array use method unshift
console.log("++++++unshift added to front++") 
marks.unshift(100)
console.log(marks) 
console.log(marks.length)
marks.unshift(10,20,30)
console.log(marks) 
console.log(marks.length)
// we cud also get the index of particular element from array using method indexOf by passing the element from array
console.log(marks) 
console.log(marks.indexOf(30))//index is 2
// another very important method used in automation is includes 
// includes method tells use whether a particular value is present in array and return true or false
console.log(marks.includes(566)) // checks if 566 is present in array
console.error("566 is not present in array ") // error is another way to print but colorful
console.log(marks.includes(10))// checks if 10 is present in array
console.log(marks.includes(20,5))// here it is checking for 20 value, starting from index 5 in array
// another important method is Slice which creates a subarray
console.log("Array is "+ marks)
marks.slice(2,5)// this will create sub array starting from index 2 of marks array up till index 4 so 30,100,20
// we cud store it in another array, JS intelligently know it will be var as original array was var
     subarry=marks.slice(2,5);
console.log(subarry);
console.log(Math.random());
console.log(Math.random()*10);
let g=9;
//let g=10;// cannot declare it again as we declared it at line 54 , else will get error , but we cud change value or 
// re-assign the value  of g  like g=10

// lets write a for loop to iterate and print items of the array 
//var sum=0;
// for(let counter=0;counter<marks.length;counter++)
//     {
//         //console.log(marks[counter]);// iterating each element in array
//         sum=sum+marks[counter];
          
//     }
//     console.log("sum is "+sum);// printing sum above here

    // reduce , filter , map - very good methods of array we can use 
    //now another way to sum the elements of array is to use reduce
    let totalmarks=marks.reduce((sum,total)=>sum+total,0);
    console.log("total is "+totalmarks);
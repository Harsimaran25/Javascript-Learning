//practice:  foreach is a method of arrays.The forEach() method executes a provided function for each array element.
//  it behaves like a loop

//syntax arr.forEach(callback(currentValue), thisArg)  , arr is an array.
//thisArg (optional)

let fruits:string[]=['apple','banana','strawberry','mango'];

//to iterate we can use foreach method

fruits.forEach( (fruit:string, index :number)=> {
console.log(`${fruit} , ${index}`);

})


fruits.forEach((fruit)=>{console.log(fruit)});

function printfruit(fruit:string): void{

    console.log('function',fruit)
}

fruits.forEach(printfruit);

let numbers:number[]=[2,4,6,8,10]

function square(num:number):void{

    console.log('square is', num*num)
}

numbers.forEach(square);


numbers.forEach((num)=> {

    console.log('square using arrow', num*num)
})


function multiplyBy2(num:number):number {

    return num*2;
}


numbers.forEach((num)=>{

    const p:number=multiplyBy2(num);
    console.log(p)
});


let students:string[]=['magha','bhakha','havelli'];

students.forEach(student=>{
    console.log(student);
})

let items:string[]=['table','chair','bench'];
let itemcpy:string[]=[];

items.forEach(item=>{
itemcpy.push(item);

});
console.log(itemcpy);


//above using normal for loop

let itemcpy2:string[]=[];
for(let i=0;i<items.length;i++){
 itemcpy2.push(items[i]);


}

console.log(itemcpy2)


//for..of loop is better to use instead foreach
//The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
//for (element of iterable) {
    // body of for...of
//}
for(let item of items){

    console.log('using for of loop',item);
}


//the JavaScript for...in loop iterates over the keys of an object
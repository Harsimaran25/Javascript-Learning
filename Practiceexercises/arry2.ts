

const numbersArray1 : number[] =[10,30,44,33,55,90];

let spliced1=numbersArray1.splice(1,2); // remove 2 elements from index 1
console.log(spliced1);
console.log('after splice',numbersArray1);


let splicedTwo2:number[]= numbersArray1.splice(2,1,100); //replace 1 element from index 2 with 100
console.log('splicedtwo is',splicedTwo2);
console.log('after splice2',numbersArray1);
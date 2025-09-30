// bit more of Function practice

//function basic
function havelliKing(){

    //content of function
    console.log('Bhai hi Havelli ke RAJA hai');
}


//calling the function

havelliKing();

function chappU(){

    let chappudone= false
    console.log('drive till mill Cct');
    console.log('Chappu Completed',chappudone)
}

chappU();

//ANOTHER CONCEPT : variables can contain functions examples below
// Variables contain a certain value and are something; they do not do anything.Functions are actions

let mulTar= function(){

    let tripToPerth='Mul tarru trip done inside this function'
    console.log('Mul Tarru sarvan',tripToPerth);
};

mulTar();



////
let words=['bhakha','magha','chagha']
function inputtedName(){
let i=Math.floor(Math.random() * words.length)
    console.log(words[i]);




}

inputtedName();


function addNum(a,b){

    return a+b;
}


console.log(addNum(5,6));

// now if we create function like this
function addNum2(a=8,b=8){

    return a+b;
}

console.log(addNum2()); // if no arguments passed it will add default  parameters/arguments
console.log(addNum2(6,7));// now it will add the passed parameters instead
console.log(addNum2(5,5,6)) //If you call a function with more arguments than parameters, nothing will happen.
// JavaScript will just execute the function using the first arguments that can be
// mapped to parameters
console.log(addNum2(6));
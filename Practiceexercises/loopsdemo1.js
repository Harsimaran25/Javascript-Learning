//logic statements if and if else 
/* if *some condition is true*, then *a certain action will happen*, else *another action will happen* */

// if(expression) {
//  code associated with the if block
//  will only be executed if the expression is true
// } else {
//  code associated with the else block
// we don't need an else block, it is optional this code will only be executed if the expression is false
 //       }

 const test=false;
 console.log(test);
if(test){
    console.log("Variable is true , in if condition");

}

if (!test){

console.log("in else");

}

//////////

let age=20;
let cost=0;
if(age<3){
     cost=0;
    console.log("Free access");
}
else if(age >=3 && age<12){
    cost=5;
    console.log("access is $5");
}
else if(age>=12 && age< 65){
    cost =10;
       console.log("access is $10");
}
console.log("Total cost is "+cost);

//Conditional ternary operators
//if *operand1*, then *operand2*, else *operand3*
//operand1 ? operand2 : operand3
//expression ? statement for true : statement associated with false;
let  agenum=10;
let access =agenum>=20 ? "enter" : "no entry";
console.log(access);
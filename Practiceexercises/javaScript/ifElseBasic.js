//JavaScript if...else Statement


//The JavaScript if...else statement is used to execute/skip a block of code based on a condition.
//if ..else is a conditional statement that executes a block of code only when a specific condition is met

/*Syntax
if (condition) {
    // block of code body of if // execute this if condition is true
}
else {
    // block of code
    // execute this if condition is false
}


*/

let nuum=34

if(nuum >= 34){

    console.log('Greater then 34')

}
else {
    console.log('Less then 34')
}



//JavaScript else if Statement -- We can use the else if keyword to check for multiple conditions.

//Syntax of else if statement
/*
//check for condition1
if (condition1){
    //block of code
}
//check for condition2
else if(condition2) {

//block of code
}
else{
    //else body
}
    */

console.log('lets see example of else if')

let rating=4;
// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if(rating <=2 ){
    console.log('Bad Rating')
}
else if(rating >=4){
    console.log('Good Rating')
}
else {
    console.log('Rating is Average')
}

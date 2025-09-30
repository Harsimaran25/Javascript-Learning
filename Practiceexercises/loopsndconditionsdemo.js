const { Console } = require("console")

console.log("This is program to understand JS \n loops and conditions")
// lets do if loop
const flag=true
if(!flag) // now this is true but If we set it to !flag - ! is negation
{
console.log("Inside IF loop")
}
else{
console.log("Inside else")
}

// now while is used when we know how many times we need to run 
// now we need to manipulate the variable inside condition 
// so that its  value is changed
let counter=0
while(counter>10){

console.log(counter)
counter+=1 //now this location of increment matters whether it is before print or after
// counter=counter+1 or counter++ or counter+=1 is same
}

// now lets see do while loop
// in do while no matter the condition true or false it will run once first time then 
// it will check condition
do{
    counter++
console.log("in do now ,print counter value :"+counter)
}while (counter>10)
{
    console.log("inside while of do")
}

// for loop is similar to while loop, for loop we know how many times we need to run
 for(let counter2=0;counter2<10;counter2++){
     console.log("indise for loop"+counter2)

 }

 //simple demo of for lets say we want to find numbers multiple of 2and 5
console.log("**********************")
// operators like And && OR ||
 for(let k=1;k<=50;k++){

     //let number=1
     if(k%2 == 0 && k%5 == 0){

        console.log(k)
        
     }
// else{
//     console.log("not divisible by 2or 5")
    
// }
 }
 //lets use break statement
 //now using above example if I just want to print first 5 numbers
 console.log("**********************")
 let num=0;
  for(let g=1;g<=50;g++){

     //let number=1
     if(g%2 == 0 && g%5 == 0){
         num++
        console.log(g)
        if(num==3)
            break
     }

 }
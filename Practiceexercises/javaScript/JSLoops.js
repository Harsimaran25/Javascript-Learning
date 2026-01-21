//JavaScript for loop
/*In JavaScript, the for loop is used for iterating over a block of code a certain number of times, 
// or to iterate over the elements of an array.*/

//syntax for loop 
/*() for (initialExpression; condition; updateExpression) {
    // for loop body
} */



    let msg='Hello'
    for (let i=0;i<2;i++){
        console.log(msg)
    }

    //print 5 numbers
    for(let i=1;i<=5;i++){
        console.log(i)
    }

    //Display Sum of n Natural Numbers

   
    let sum=0;
    let c=1;
    for( ;c<=100;c++){
        sum=sum+c; //sum+=c
    }
    console.log(`sum is ${sum}`)

    //Nested for Loops
    //A for loop can also have another for loop inside it. 
    // For each cycle of the outer loop, the inner loop completes its entire sequence of iterations. For example,

    for(let out=1;out<4;out++){

        console.log(`outerloop out value ${out}`)
        
        for(let inloop=1;inloop<4;inloop++){

            console.log('inner loop', inloop)
        }
    }
    console.log('out of for')


    ////////////////
    //While Loop - JavaScript while Loop 
    // The while loop repeatedly executes a block of code as long as a specified condition is true.
    /**The syntax of the while loop is:

while (condition) {
    // body of loop
} */

    //print first 5 numbers

    let no=1;
    while(no<=5){
        console.log('in while loop',no)
        no++;
    }

 /*do while loop - the do while loop executes a block of code ONCE , then repeatedly executes it as long as the specified condition
  is true*/

  /**syntax is :
   * do {
   * 
   * //body of the loop
   * 
   * }while(condition)
   */

  //Display Numbers from 3 to 1
  let noomber=4;
  do{
    console.log(noomber)
    noomber--;
    //console.log(noomber)
  }while(noomber>=1)


/**JavaScript break Statement
The break statement terminates the loop immediately when it's encountered.  break statement is used in for and while loops.*/
//The break statement is usually used inside decision-making statements such as if...else.

while(true){

    let nums=0;
    if(nums==0){
        break;
    }
    console.log(nums)
}

//break with for loop
console.log('break demo')
for(let kk=1;kk<9;kk++){

    //console.log(kk)
    if(kk==4){
        break;
    }
    console.log(kk)
}


//continue JavaScript continue Statement 
//The continue statement skips the current iteration of the loop and proceeds to the next iteration.
//The continue statement is usually used inside decision-making statements such as if...else.
console.log('continue demo')

//print odd number
for(let rr=1;rr<9;rr++){

    if(rr%2 === 0){ //will skip on this condition
        continue; // 
    }
    console.log(rr);
}
/**Arrow functions
Arrow functions are a special way of writing functions that can be confusing at first.
Their use looks like this:
(param1, param2) => body of the function;

Or for no parameters:
() => body of the function;

Or for one parameter (no parentheses are needed here):
param => body of the function;

Or for a multiline function with two parameters:
(param1, param2) => {
// line 1;
// any number of lines;
};

Arrow functions are useful whenever you want to write an implementation on the
spot, such as inside another function as an argument. This is because they are a
shorthand notation for writing functions */

function doingStuff(x) {
console.log(x);
}
/*To rewrite above as  an arrow function To rewrite this as an arrow function, you will have to store it in a variable or send it
in as an argument if you want to be able to use it*/

let arrowdoingStuff=x=>console.log(x);
arrowdoingStuff('bhakhin level');

/**Returning with arrow functions
If we have a one-line arrow function, we can return without using the keyword
return. So if we want to rewrite the function, we can write it like this to make an
arrow function out of it:
let addTwoNumbers = (x, y) => x + y;
 And we can call it and store the result like this:*/

let addTwoNumbers = (x, y) => x + y;
let result = addTwoNumbers(12, 15);
console.log(result);
// Ternary Operator  - It is also known as a conditional operator.

/**A ternary operator evaluates a condition and executes a block of code based on the condition.

Its syntax is:

condition ? expression1 : expression2 

The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.
If the condition is false, expression2 is executed.
*/

let marks=90
let result = (marks>33) ? 'pass' :'fail'

console.log(`result is ${result}`)

marks=20
result = (marks>33) ? 'pass' :'fail'
console.log(`result is ${result}`)

let age=15

let eligibiltytovote =(age>18) ? 'Eligible' : 'Not eligble'

console.log(eligibiltytovote)
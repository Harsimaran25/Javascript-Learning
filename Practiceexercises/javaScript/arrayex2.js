// Manipulate an array of strings (add, remove, sort)
// Create an array named studentNames with the names of your students.

// Add a new student name to the beginning of the array.

// Remove the last student name from the array.

// Alphabetize the student names within the array.


let studentNames=['magha','bhakha','level','clyde','baadshah']

studentNames.push('faagha');
//studentNames.shift() // remove first
console.log(studentNames);
studentNames[0]='lagha';
console.log(studentNames);
studentNames.splice(0,0,'chagha'); // inserted at beginning
console.log(studentNames);
studentNames.pop();//remove last
console.log(studentNames);

console.log(studentNames.sort());
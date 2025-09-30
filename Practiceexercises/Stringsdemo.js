let name='bhai';
let lastname="m power";

console.log(typeof name);
console.log(lastname.length);
let day='Tuesday ';// we have extra space in end
let subday= day.slice(0,3);
console.log(subday);
console.log(day[2]);

//now to split the string into two use split
let splitday=day.split('s');
console.log(splitday);
console.log(splitday[0]);
console.log(splitday[1]);
console.log(splitday[1].length);
//to remove white space from  this we can use trim
console.log(splitday[1].trim().length);
// now some value can be string and we want to calculate difference like below example
let date='23';
let nextdate='30';
//parseint method will convert string to int
let diff=parseInt(nextdate-date);
console.log(diff);
// to convert back to string
diff.toString();
// concatination
let newword= name+"King"+lastname;
console.log(newword);




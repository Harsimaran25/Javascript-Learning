// for of loop

// can be used with strings ,arrays

let cars = ["bmw", "hond", "rangerover", "m3"];

// to loop through array and print
console.log(cars.length);
console.log(cars[0]);
for (let car of cars) {
  console.log(car);
}

let sentence = "this is a sentence";
//strings and array behave somewhat similar
console.log(sentence.length);
console.log(sentence[3]);

//another for loop ES6 syntax

//it is called foreach

cars.forEach((car) => {
  console.log(car);
});

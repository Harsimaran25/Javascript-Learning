/**excercise to create a function that will provide recommendations on which car a family
 * should rent based on family size and planned distance to travel
 *  */

function carRentalRecommend(family_size, distance) {
  if (family_size <= 4 && distance < 200) {
    return "Car1";
  } else if (family_size <= 4 && distance > 200) {
    return "Car2";
  } else {
    return "CarVan";
  }
}

let r = carRentalRecommend(5, 220);
console.log(r);

// Apply transformations and calculations to array elements, and filter elements based on a condition
// You have an array called productPrices with various product prices.

// Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

// Use the filter method to create a new array called affordableProducts containing only products priced below $50

// Calculate the total cost of all items in the affordableProducts array using the reduce method.

let productPrices=[110,33,200,303,139,99,11,25,49.9];

let discountedPrices=productPrices.map((newprice)=>newprice-(newprice*0.1));
console.log("discounted prices are",discountedPrices);
let affordableProducts=productPrices.filter((lowprice)=>lowprice<50,productPrices[0]);
console.log("affordableproducts are",affordableProducts);
let totalcost= affordableProducts.reduce((affordableProducts,sum)=>sum+affordableProducts,0);
console.log("total cost of all items in the affordableProducts ",totalcost);
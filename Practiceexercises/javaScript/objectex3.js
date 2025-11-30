//objects in array ... in objects

company={ companyName:'Bhakha',
    activities:['magha','bhakha','chagaha'],
    address:[{
        street:'cllyde king',
        number:420,
    },
{
    street:'Dasua',
    number:'Mpower'
}
],  //objects inside array 
years: 'Bhaiijaan'
};

let st= company.address[1].street;
console.log(st);

// now function is written like below

// function name(blank or arguments if any){   keyword function is used at start then functionname
//     //code here
// }

function squareOfNum(a){
return a*a;

}
// calling function using paranthesis nameOfTheFunction(); and printing
console.log(squareOfNum(5));

/*functions can contain variables, which shape how they operate. The
opposite is also true: variables can contain functions*/
let varwithfunc= function(){
let varinfunc='function in variable';
    console.log('hello from function in variable',varinfunc);
};

varwithfunc();
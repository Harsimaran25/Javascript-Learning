

let k=[1,3,4,5,6];
console.log(k.shift());
console.log(k);
//Practice exercise 4.4




let randnum=Math.random();
console.log(randnum)
randnum=randnum*2;
console.log(randnum)
randnum=Math.floor(randnum);
console.log(randnum)

// lets look at while loop
let c=0;
while(c<10){

    console.log(c)
    c++;

}

//while loop to find value on array
let arr1=["mpower","bhakha","kinghai","clyderaja"];

let notfound=true;

while(notfound && arr1.length>0){
    if(arr1[0]==="bhakha"){

        console.log("found");
        notfound=false;
    }
    else{
        arr1.shift();// removes first element from array
    }
}

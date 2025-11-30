// to understand promise

let promiseData = new Promise((resolve) => {
  setTimeout(function () {
    console.log("inside function");
    resolve("promise resolved");
  }, 2000);
});

async function f1() {
  let x = await promiseData;
  console.log("hello");
  console.log(x);
}

f1();

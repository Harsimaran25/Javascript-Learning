// object exercise 4 for objects

const ClydeKing = {
  name: "Clyde King",
  age: 25,
  address: [
    { suburb: "Clyde", number: 420, street: "Clyde King" },
    {
      suburb: "Dasua",
      number: 69,
      street: "Mpower",
    },
  ],
  greetBhai: function () {
    console.log("Hello", this.name, address[1].suburb);
  },
};
ClydeKing.greetBhai();

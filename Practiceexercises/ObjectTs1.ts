// object exercise file Object4.js for objects but using typescript

type Address = {
  suburb: string;
  number: number;
  street: string;
};

type ClydeKingType = {
  name: string;
  age: number;
  address: Address[];
  greetBhai: () => void;
};

const ClydeKing: ClydeKingType = {
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
    console.log("Hello", this.name, this.address[1].suburb);
  },
};

ClydeKing.greetBhai();

console.log(ClydeKing.age);
console.log(ClydeKing.address);
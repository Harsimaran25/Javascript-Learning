// to understand Type alias and Interface in Typescript

/**Type Aliases
Type Aliases allow defining types with a custom name (an Alias).
type is a keyword in TypeScript that we can use to define the shape of data. Type aliases in TypeScript mean “a name for any type.” 
They provide a way of creating new names for existing types. Type aliases don’t define new types; instead, they provide an 
alternative name for an existing type.Type aliases can be created using the type keyword, referring to any valid 
TypeScript type, including primitive types:


yntax of Type Alias
You can create a type alias using the type keyword, followed by the alias name and the type it represents.

type AliasName = Type;
For example,

type userName = string; 
Here,

userName is the alias name.
string is the type that userName represents.



example:
type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}



Type Aliases can be used for primitives like string or more complex types such as objects and arrays: */


type AGE=number;

const ageOfBhai : AGE =25;
console.log(ageOfBhai)





//Interfaces
//Interfaces are similar to type aliases, except they only apply to object types.

/* In TypeScript, an interface defines a contract that an object must adhere to. Below is an example:


interface Client { 
    name: string; 
    address: string;
}
We can express the same Client contract definition using type annotations:

type Client = {
    name: string;
    address: string;
};
 */


//We can define a type alias for a primitive type like so:

// type Address = string;
// we can’t use an interface to alias a primitive type. The interface can only be used for an object type.
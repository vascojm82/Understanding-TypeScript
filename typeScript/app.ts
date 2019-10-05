//Assigning Types Implicitly
// string
let myName = 'Max';
// myName =28;

//number
let myAge = 27.5;
// myAge = 'Max';

//boolean
let hasHobbies = false;
// hasHobbies = 1;

//Assigning Type Explicitly
//type Any
let myRealAge;
myRealAge = 34;
myRealAge = '27';

//type Number
let myRealAge2: number;
myRealAge2 =27;
// myRealAge2 = '27';

// array
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);

//tuples (Like SQL DB, a row)
let address: [string, number] = ["Superaddress", 99];

//enum
enum Color{
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any type
let car: any = "BMW";
console.log(car);
car = { brand: "Audi", model:"RS5"};
console.log(car);

//functions
function returnMyName(): string{
  return myName;
}

console.log(returnMyName());

//void
function sayHello(): void{  //o sin el ': void'
  console.log("Hello");
}

sayHello();

//argument Types
function multiply(value1: number, value2: number): number{
  return value1 * value2;
}

console.log(multiply(2, 4));

//function types
let myMultiply: (va1: number, val2: number) => number;    //Function variable will only be able to accept a func with two number arguments that returns a number
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData = {    //Implictly assigned to this type of object with these member properties and their types only
  name: "Max",
  age: 27
};

//userData = {};   //cannot be assigned

///userData = {    //Cannot be assigned i  the case of objects the names of the member properties should also match not just the types of them
  // a: "Hello",
  // b: 32
//}

let userData2: {name: string, age: number}    //Explictly Assigning type to an object.

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[]{
    return this.data;     //Returns 'data' number array
  }
};

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[]{
    return this.data;     //Returns 'data' number array
  }
}

//union types
let myRealRealAge: number | string = 27;    //Can be assigned to be either a number or a string only
myRealRealAge = "27";

//check types
let finalValue = 35;
if(typeof finalValue == "number")         //type to be checked has to be in quotes
  console.log("Final value is a number");

//never type
function neverReturns(): never{           //never returns nothing, void returns 0
  throw new Error('An Error!');
}

//Nullable types
let canBeNull = 12;         //Implied type of number
//canBeNull = null;         //On strict null check = true on 'tsconfig.json', cannot re-assign variable with type number to a null.

let canBeNull_: number | null = 12;   //variable specified to take a number or a null type.
canBeNull_ = null;                    //can be set to null as specified before

let canAlsoBeNull;        //type auto-set to 'any' but is Nullable by default, it's set to 'undefined' since the initial value is undefined, can be assigned any type
canAlsoBeNull = null;

let canThisBeAny = null;
canThisBeAny = 12;

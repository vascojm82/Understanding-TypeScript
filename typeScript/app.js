//Assigning Types Implicitly
// string
var myName = 'Max';
// myName =28;
//number
var myAge = 27.5;
// myAge = 'Max';
//boolean
var hasHobbies = false;
// hasHobbies = 1;
//Assigning Type Explicitly
//type Any
var myRealAge;
myRealAge = 34;
myRealAge = '27';
//type Number
var myRealAge2;
myRealAge2 = 27;
// myRealAge2 = '27';
// array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
//tuples (Like SQL DB, a row)
var address = ["Superaddress", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any type
var car = "BMW";
console.log(car);
car = { brand: "Audi", model: "RS5" };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
}
sayHello();
//argument Types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
//function types
var myMultiply; //Function variable will only be able to accept a func with two number arguments that returns a number
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Max",
    age: 27
};
//userData = {};   //cannot be assigned
///userData = {    //Cannot be assigned i  the case of objects the names of the member properties should also match not just the types of them
// a: "Hello",
// b: 32
//}
var userData2; //Explictly Assigning type to an object.
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data; //Returns 'data' number array
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data; //Returns 'data' number array
    }
};
//union types
var myRealRealAge = 27; //Can be assigned to be either a number or a string only
myRealRealAge = "27";
//check types
var finalValue = 35;
if (typeof finalValue == "number")
    console.log("Final value is a number");
//never type
function neverReturns() {
    throw new Error('An Error!');
}
//Nullable types
var canBeNull = 12; //Implied type of number
//canBeNull = null;         //On strict null check = true on 'tsconfig.json', cannot re-assign variable with type number to a null.
var canBeNull_ = 12; //variable specified to take a number or a null type.
canBeNull_ = null; //can be set to null as specified before
var canAlsoBeNull; //type not auto-set to 'any', it's set to 'undefined' so it can be overwritten to a null or any other type
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;

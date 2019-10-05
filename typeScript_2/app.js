// let & const
console.log("LET & CONST");
var variable = "Test"; //Global Scope
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;   //Won't work
//Block Scope
function reset() {
    //console.log(variable);
    var variable = null; //Function Scope
    for (var variable_1 = 0; variable_1 < 5; variable_1++) {
        console.log("Inside For Loop Block: " + variable_1); //Block Scope
    }
    console.log("Inside Function but outside Loop Block: " + variable); //Function Scope
}
reset();
console.log("Global window Scope: " + variable); //Global Scope
// Arrow functions
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; }; //return number1 * number2
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Josh");
//Default parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log("start: " + start);
        start--;
    }
    console.log("DONE!", start);
};
countdown(20);
countdown();
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log("Using list of numbers: " + Math.max(33, 2, 99, -3));
console.log("Using the spread operator: " + Math.max.apply(Math, numbers)); //Spread operator
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray(1, 2));
function makeArray_() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args; //Return a numbers array
}
console.log(makeArray_(1, 2, 6));
function makeArray__(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return name + " " + args;
}
console.log(makeArray__("Jose", 1, 2, 6));
//Destructuring Arrays
console.log("DESTRUCTURING");
var myHobbies = ["Sports", "Cars"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring objects
var userData = { userName: "Jose", age: 35 };
// const userName = userData.userName;
// const age = userData.age;
//New       //New
//var name   //var name
var myName = userData.userName, myAge = userData.age; //Names here must match the key name in the 'userData' object above(Source Object)
//Object           //Object       //Source
//property         //property     //object
console.log(myName, myAge);
//Template Literals
// const userName = "Jose";
// const greeting = "Hello, I'm " + userName;
// console.log(greeting);
var userName = "Jose";
var greeting = " This is a heading!\nI'm " + userName + ".\nThis is Kool! ";
console.log(greeting);

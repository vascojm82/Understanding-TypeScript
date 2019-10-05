// let & const
console.log("LET & CONST");
let variable = "Test";      //Global Scope
console.log(variable);
variable = "Another Value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;   //Won't work

//Block Scope
function reset(){
  //console.log(variable);
  var variable = null;        //Function Scope
  for(let variable=0; variable<5; variable++){
    console.log("Inside For Loop Block: " + variable);    //Block Scope
  }
  console.log("Inside Function but outside Loop Block: " + variable);   //Function Scope
}
reset();
console.log("Global window Scope: " + variable);    //Global Scope

// Arrow functions
console.log("Arrow Functions");
const addNumbers = function(number1: number, number2: number): number{
  return number1 + number2;
}

console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;    //return number1 * number2
console.log(multiplyNumbers(10,3));

const greet = () => {
  console.log("Hello");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Josh");

//Default parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  while(start > 0){
    console.log("start: " + start);
    start--;
  }
  console.log("DONE!", start);
}
countdown(20);
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1,10,99,-5];
console.log("Using list of numbers: " + Math.max(33,2,99,-3));
console.log("Using the spread operator: " +Math.max(...numbers));     //Spread operator

function makeArray(arg1: number, arg2: number){
  return [arg1, arg2];
}
console.log(makeArray(1,2));

function makeArray_(...args: number[]){       //Rest Parameter, take all the parameters passed to the function (...args) and put them into a numbers array
  return args;    //Return a numbers array
}
console.log(makeArray_(1,2,6));

function makeArray__(name: string, ...args: number[]){       //Rest Parameter
  return name + " " + args;
}
console.log(makeArray__("Jose",1,2,6));

//Destructuring Arrays
console.log("DESTRUCTURING");
const myHobbies = ["Sports", "Cars"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//Destructuring objects
const userData = {userName: "Jose", age: 35};     //Source Object
// const userName = userData.userName;
// const age = userData.age;

                  //New       //New
                 //var name   //var name
const {userName: myName, age: myAge} = userData;       //Names here must match the key name in the 'userData' object above(Source Object)
     //Object           //Object       //Source
     //property         //property     //object

console.log(myName, myAge);

//Template Literals
// const userName = "Jose";
// const greeting = "Hello, I'm " + userName;
// console.log(greeting);

const userName = "Jose";
const greeting = ` This is a heading!
I'm ${userName}.
This is Kool! `;
console.log(greeting);

interface NamedPerson{
  firstName: string;
  age?: number;
  [propName: string]: any;    //In case you don't know the name of the property in advance, could be a property or an array of type any, don't matter
  greet(lastName: string): void;
}

function greet(person: NamedPerson){
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson){
  person.firstName = "Jose";
}

const person: NamedPerson = {                            //This doesn't get checked strictly so it will pass and not generate an error
  firstName: "Max",
  hobbies: ["Cooking", "Sports"],
  greet(lastName){
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

// greet({firstName: "Jose", age: 35});     //Object properties matching the interface will only be checked on object literals passed as arguments
//greet(person);
changeName(person);
greet(person);
person.greet("Vasconcellos");


class Person implements NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string){
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
}

const myPerson = new Person();
myPerson.firstName = "Jose";
myPerson.lastName = "Vasconcelos";
greet(myPerson);
myPerson.greet(myPerson.lastName);

//Function Types
interface DoubleValueFunc{                      //Whatever uses this Interface
  (number1: number, number2: number): number;   //Must be a function of this type
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(number1: number, number2: number){
  return (number1 + number2) * 2;
}

console.log(myDoubleFunction(10,20));

//Interface Inheritance
interface AgedPerson extends NamedPerson{
  age: number;    //In this interface the age is required

}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Josh",
  greet(lastName: string){
    console.log("Hello!");
  }
}

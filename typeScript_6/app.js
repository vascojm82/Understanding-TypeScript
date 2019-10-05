function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Jose";
}
var person = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: "Jose", age: 35});     //Object properties matching the interface will only be checked on object literals passed as arguments
//greet(person);
changeName(person);
greet(person);
person.greet("Vasconcellos");
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Jose";
myPerson.lastName = "Vasconcelos";
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(10, 20));

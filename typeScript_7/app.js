// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
//Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length); //Implicit type
console.log(betterEcho(27)); //Explicit type
console.log(betterEcho({ name: "Max", age: 27 }));
//Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Orange", "Pear"]); //Implicit type
printAll(["Apple", "Banana"]); //Explicit type
//Generic Types
var echo2 = betterEcho;
console.log(echo2("Something")); //Implicit type
console.log(echo2("Something")); //Implicit type
// Generic Classes                            //constraints U to be a number or string
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; //Adding the '+' in front of each variable casts them to a 'number' type
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

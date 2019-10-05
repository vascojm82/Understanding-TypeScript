//Simple Generic
function echo(data: any){
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

//Better Generic
function betterEcho<T>(data: T){
  return data;
}

console.log(betterEcho("Max").length);       //Implicit type
console.log(betterEcho<number>(27));         //Explicit type
console.log(betterEcho({name: "Max", age: 27}));

//Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

//Arrays
function printAll<T>(args: T[]){
  args.forEach((element) => console.log(element));
}
printAll(["Orange", "Pear"]);               //Implicit type
printAll<string>(["Apple", "Banana"]);      //Explicit type

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2("Something"));            //Implicit type
console.log(echo2<string>("Something"));    //Implicit type

//Generic Classes                            //constraints U to be a number or string
class SimpleMath<T extends number | string, U extends number | string> {
                  //constraints T to be a number or string
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;       //Adding the '+' in front of each variable casts them to a 'number' type
  }
}
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

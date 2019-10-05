class Person{
  public name: string;        //ES6 does NOT have public, private or protected keywords
  private type: string;
  protected age: number;
                           //Create a public property named 'username' in this Person class and assigned it what's passed to the constructor here
  constructor(name: string, public username: string, type: string, age: number){
    this.name = name;
    this.type = type;
    this.age = age;
  }

  getType(){
    return this.type;
  }

  setType(type: string){
    this.type = type;
  }

  getAge(){
    return this.age;
  }

  setAge(age: number){
    this.age = age;
  }

}

const person = new Person("John", "vascojm", "active", 34);
console.log(person);

//Inheritance
class Jose extends Person{
  // name = "Jose";    //Contents of child class always overwrites contents of superclass, will overwrite what's passed in the constructor of superclass
  //                     //if no constructor is provided in the child class.

  constructor(public username: string, type: string, age: number){
    super("Jose", username, type, age);
  }
}

const new_person = new Jose("N/A", "inactive", 35);
console.log(new_person);

//Getters & Setters
class Plant{
  private _species: string = "Default";

  set species(value: string){
    if(value.length > 3)
      this._species = value;
    else
      this._species = "Default";
  }

  get species(){
    return this._species;
  }
}

let plant = new Plant();
console.log("Before: " + plant.species);
plant.species = "ABCDE";
console.log("After: " + plant.species);

//Static Properties & Methods
class Helpers{
  static pi: number = 3.1416;
  static calcCircumference(diameter){
    return this.pi * diameter;
  }
}
console.log(2 * Helpers.pi);
console.log(Helpers.calcCircumference(8));

//Abstract Classes
abstract class Project{
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget(){
    return this.budget * 2;
  }
}

class ITProject extends Project{
  changeName(name: string): void{
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Server Upgrade");
console.log(newProject);
console.log(newProject.calcBudget());

//private constructors  (SingleTon Pattern)
console.log("SINGLETON");
class OnlyOne{
  private static instance: OnlyOne;
  private name = "Default";

  private constructor(public readonly name_: string) {    //name_ will be public BUT readonly from outside the constructor
    this.name = name_;
  }

  static getInstance(){

    if(!OnlyOne.instance)
      OnlyOne.instance = new OnlyOne("The Only One");

    //console.log(OnlyOne.instance);
    return OnlyOne.instance;

  }
}

// let wrong = new OnlyOne("The Only One");     //Won't work since constructor is private
let right = OnlyOne.getInstance();
let second = OnlyOne.getInstance();

console.log("First Object: " + JSON.stringify(right));
console.log("Second Object: " + JSON.stringify(second));

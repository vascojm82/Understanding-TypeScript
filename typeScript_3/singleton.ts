console.log("SINGLETON");
class Singleton{
  private static instance: Singleton;
  private name;

  private constructor(name_: string) {
    this.name = name_;
  }

  static getInstance(){

    if(!Singleton.instance)
      Singleton.instance = new Singleton("The Only One");

    //console.log(OnlyOne.instance);
    return Singleton.instance;

  }
}

// let wrong = new Singleton("The Only One");     //Won't work since constructor is private
let first = Singleton.getInstance();
let second_ = Singleton.getInstance();

console.log("First Object: " + JSON.stringify(first));
console.log("Second Object: " + JSON.stringify(second_));

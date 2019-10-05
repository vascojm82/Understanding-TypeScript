//NAMESPACES
namespace MyMath {  //Mynamespace namespace
  export namespace Circle{
    export function calculateCircumference(diameter: number){     //'export' keyword makes the function available outside the namespace
      return diameter * PI;
    }
  }
}

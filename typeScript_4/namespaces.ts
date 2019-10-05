//NAMESPACES
namespace MyNewNamespace{
  export const Pi = 3.1416;    //MyNewNamespace namespace, have to use the 'export' keyword to make it available outside the namespace

  export function calculateCircumference(diameter: number){     //'export' keyword makes the function available outside the namespace
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number){    //'export' keyword makes the function available outside the namespace
    return width * length;
  }
}

const Pi = 2.99;        //Global Namespace

console.log(MyNewNamespace.calculateRectangle(10,20));
console.log(MyNewNamespace.calculateCircumference(3));
console.log(MyNewNamespace.Pi);     //MyNewNamespace namespace
console.log(Pi);                    //Global Namespace

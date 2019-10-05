//NAMESPACES
namespace MyMath{
  const PI = 3.1416;    //Mynamespace namespace

  export function calculateRectangle(width: number, length: number){    //'export' keyword makes the function available outside the namespace
    return width * length;
  }
}

//NAMESPACES
var MyMath;
(function (MyMath) {
    var PI = 3.1416; //Mynamespace namespace
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
//NAMESPACES
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
/// <reference path="rectangleMath.ts"/>
/// <reference path="circleMath.ts"/>
var CircleMath = MyMath.Circle;
var PI = 2.99; //Global Namespace
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(3));
console.log(PI); //Global Namespace

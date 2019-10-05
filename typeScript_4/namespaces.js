//NAMESPACES
var MyNewNamespace;
(function (MyNewNamespace) {
    MyNewNamespace.Pi = 3.1416; //MyNewNamespace namespace, have to use the 'export' keyword to make it available outside the namespace
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyNewNamespace.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyNewNamespace.calculateRectangle = calculateRectangle;
})(MyNewNamespace || (MyNewNamespace = {}));
var Pi = 2.99; //Global Namespace
console.log(MyNewNamespace.calculateRectangle(10, 20));
console.log(MyNewNamespace.calculateCircumference(3));
console.log(MyNewNamespace.Pi); //MyNewNamespace namespace
console.log(Pi); //Global Namespace

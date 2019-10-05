//NAMESPACES
var MyMath;
(function (MyMath) {
    var PI = 3.1416; //Mynamespace namespace
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = (function () {
    function Person() {
        console.log("Hello World !!");
    }
    return Person;
}());
Person = __decorate([
    logged
], Person);
//Factory
function logging(value) {
    return value ? logged : null;
}
var Car = (function () {
    function Car() {
    }
    return Car;
}());
Car = __decorate([
    logging(true)
], Car);
//Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    return Plant;
}());
Plant = __decorate([
    logging(true),
    printable
], Plant);
var plant = new Plant();
plant.print();

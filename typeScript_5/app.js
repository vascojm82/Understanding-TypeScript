// import {PI, calculateCircumference} from "./math/circle";
// import {calculateRectangle} from "./math/rectangle";
define(["require", "exports", "./math/circle", "./math/rectangle"], function (require, exports, Circle, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // console.log(PI);
    // console.log(calculateCircumference(10));
    // console.log(calculateRectangle(20,50));
    console.log(Circle.PI);
    console.log(Circle.calculateCircumference(10));
    console.log(rectangle_1.default(20, 50));
});

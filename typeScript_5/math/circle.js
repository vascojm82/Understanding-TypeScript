define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * exports.PI;
    }
    exports.calculateCircumference = calculateCircumference;
});

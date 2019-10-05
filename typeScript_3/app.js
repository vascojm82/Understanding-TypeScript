var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    //Create a public property named 'username' in this Person class and assigned it what's passed to the constructor here
    function Person(name, username, type, age) {
        this.username = username;
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Person.prototype.getType = function () {
        return this.type;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person("John", "vascojm", "active", 34);
console.log(person);
//Inheritance
var Jose = (function (_super) {
    __extends(Jose, _super);
    // name = "Jose";    //Contents of child class always overwrites contents of superclass, will overwrite what's passed in the constructor of superclass
    //                     //if no constructor is provided in the child class.
    function Jose(username, type, age) {
        var _this = _super.call(this, "Jose", username, type, age) || this;
        _this.username = username;
        return _this;
    }
    return Jose;
}(Person));
var new_person = new Jose("N/A", "inactive", 35);
console.log(new_person);
//Getters & Setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3)
                this._species = value;
            else
                this._species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log("Before: " + plant.species);
plant.species = "ABCDE";
console.log("After: " + plant.species);
//Static Properties & Methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.pi * diameter;
    };
    return Helpers;
}());
Helpers.pi = 3.1416;
console.log(2 * Helpers.pi);
console.log(Helpers.calcCircumference(8));
//Abstract Classes
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Server Upgrade");
console.log(newProject);
console.log(newProject.calcBudget());
//private constructors  (SingleTon Pattern)
console.log("SINGLETON");
var OnlyOne = (function () {
    function OnlyOne(name_) {
        this.name_ = name_;
        this.name = "Default";
        this.name = name_;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance)
            OnlyOne.instance = new OnlyOne("The Only One");
        //console.log(OnlyOne.instance);
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("The Only One");     //Won't work since constructor is private
var right = OnlyOne.getInstance();
var second = OnlyOne.getInstance();
console.log("First Object: " + JSON.stringify(right));
console.log("Second Object: " + JSON.stringify(second));

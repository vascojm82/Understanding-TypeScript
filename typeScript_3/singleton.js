console.log("SINGLETON");
var Singleton = (function () {
    function Singleton(name_) {
        this.name = name_;
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance)
            Singleton.instance = new Singleton("The Only One");
        //console.log(OnlyOne.instance);
        return Singleton.instance;
    };
    return Singleton;
}());
// let wrong = new Singleton("The Only One");     //Won't work since constructor is private
var first = Singleton.getInstance();
var second_ = Singleton.getInstance();
console.log("First Object: " + JSON.stringify(first));
console.log("Second Object: " + JSON.stringify(second_));

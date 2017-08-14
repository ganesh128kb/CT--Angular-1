var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.Hello = function () {
        console.log("Hello World from TypeScript");
    };
    return HelloWorld;
}());
//create an object of the class
var obj = new HelloWorld();
//OR
//var obj:HelloWorld = new HelloWorld();
//invoke the method
obj.Hello();

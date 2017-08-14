//create an interface
interface Interface1
{
    //abstract methods
    Method1():void; //implicitly abstract
    Method2():void; //implicitly abstract
}

//create a class which implements the interface
class Class1 implements Interface1
{
    public Method1():void
    {
        console.log("Class1.Method1 implemented");
    }
    public Method2():void
    {
        console.log("Class1.Method2 implemented");
    }
}

class Class2 implements Interface1
{
    public Method1():void
    {
        console.log("Class2.Method1 implemented");
    }
    public Method2():void
    {
        console.log("Class2.Method2 implemented");
    }
}


function F1(obj:Interface1)
{
    obj.Method1();
    obj.Method2();
}


let obj1:Class1 = new Class1();
let obj2:Class2 = new Class2();

F1(obj1);
F1(obj2);

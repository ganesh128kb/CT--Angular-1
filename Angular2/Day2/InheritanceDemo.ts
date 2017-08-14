abstract class Shape //base class
{
    protected shapename:string;
    constructor(shapename:string)
    {
        this.shapename = shapename;
        console.log("Shape constr called");
    }
    public abstract Area():void;

    public GetShapeDetails():void
    {
        console.log("Shape name: " +this.shapename);
    }
}
class Circle extends Shape  //derived class
{
    private radius:number;
    constructor(shapename:string,radius:number)
    {
        //invoke the super class constructor
        super(shapename);
        this.radius = radius;
        console.log("Circle constr called");
    }

    public Area():void
    {
        console.log("Area of Circle");
    }
    public GetShapeDetails():void
    {
        //super.GetShapeDetails();
        console.log("Radius: " +this.radius);
    }
}

class Square extends Shape  //derived class
{
    private length:number;
    private breadth:number;
    constructor(shapename:string,length:number,breadth:number)
    {
        //invoke the super class constructor
        super(shapename);
        this.length = length;
        this.breadth = breadth;
        console.log("Square constr called");
    }

    public Area():void
    {
        console.log("Area of Square");
    }
    public GetShapeDetails():void
    {
        //super.GetShapeDetails();
        console.log("Length: " +this.length);
        console.log("Breadth: " +this.breadth);
    }
}

//create an array of Shapes
let shapes:Shape[] = [
    //new Shape('NA'),
    new Circle('Circle',30.35),
    new Square('Square',20,30)
];

//iterate the shapes array & invoke the overridden method
for(let s of shapes)    //for..of loop
{
    s.GetShapeDetails();
    s.Area();
    console.log();
}

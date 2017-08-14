interface ICalculator
{
    //method signature
    (operand1:number,operand2:number):number;
}

function Add(number1:number,number2:number):number
{
    return (number1+number2);
}
function Subtract(n1:number,n2:number):number
{
    return (n1-n2);
}

function Calculate(calc:ICalculator,x:number,y:number):void
{
    var result = calc(x,y);
    console.log(result);
}

Calculate(Add,10,20);
Calculate(Subtract,10,20);


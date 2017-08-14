class Employee
{
    public empid:number;
    public empname:string;
    public age:number;
    constructor(empid:number,empname:string,age:number)
    {
        this.empid = empid;
        this.empname = empname;
        this.age = age;
    }
}

//create an array of Employees
let employees:Employee[] = [
    new Employee(1,'Emp1',30),
    new Employee(2,'Emp2',32),
    new Employee(3,'Emp3',40),
    new Employee(4,'Emp4',29),
    new Employee(5,'Emp5',33),
    new Employee(6,'Emp6',41),
    new Employee(7,'Emp7',22),
    new Employee(8,'Emp8',35),
    new Employee(9,'Emp9',26),
    new Employee(10,'Emp10',43)
];


//requirement: Filter the array based on following:
//criteria1: employees whose age is more than 35
//criteria2: employees whose age is betn 25 and 30

interface IFilter
{
    (emp:Employee):boolean;
}

function Filter(source:Employee[],func:IFilter):Employee[]
{
    let temp:Employee[] = [];
    for(var i=0 ; i<source.length ; i++)
    {
        //check the criteria 
        if(func(source[i]))
        {
            temp.push(source[i]);
        }
    }
    return temp;
}

console.log("Employees more than 35 years of age...");
var result:Employee[] = Filter(employees,(emp:Employee) => emp.age > 35);

for(var i=0 ; i<result.length ; i++)
{
    console.log(result[i].empid);
    console.log(result[i].empname);
    console.log(result[i].age);
    console.log();
}

console.log();

console.log("Employees betn 25 and 30 years of age...");
var result:Employee[] = Filter(employees,(emp:Employee) => emp.age >=25 && emp.age <= 30);
for(var i=0 ; i<result.length ; i++)
{
    console.log(result[i].empid);
    console.log(result[i].empname);
    console.log(result[i].age);
    console.log();
}

// function AgeMoreThan35(emp:Employee):boolean
// {
//     return emp.age > 35;
// }

// function AgeBetn25And30(emp:Employee):boolean
// {
//     return emp.age >= 25 && emp.age <= 30;
// }


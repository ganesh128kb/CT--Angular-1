import {Component} from '@angular/core';
import {Employee} from './Employee';

//import {IFilter} from './IFilter';


@Component({
    selector:'employeecomponent',
    template:`
    <h2>Employee List</h2>
    <ul>
        <li *ngFor="let emp of Employees | filter">
            {{emp.empid}},  {{emp.empname}}, {{emp.deptname}}
        </li>
    </ul>
    
    
    <hr/>
    
    <button (click)='AddNewEmp()'>
        Add new employee
    </button>

    <h3>Total Employee count: {{Employees.length}}</h3>
    `,
   
})
export class EmployeeComponent
{
    public Employees:Employee[] = [
        new Employee(1,'A','Sales'),
        new Employee(2,'B','Admin'),
        new Employee(3,'C','Sales'),
        new Employee(4,'D','Admin')
    ]

    //public condition1:IFilter = this.FilterBySalesDept;
    //public condition2:IFilter = this.FilterByAdminDept;


    /*
    public FilterBySalesDept(emp:Employee)
    {
        console.log("FilterBySalesDept called");
        return emp.deptname == 'Sales';
    }

    public FilterByAdminDept(emp:Employee)
    {
        console.log("FilterByAdminDept called");
        return emp.deptname == 'Admin';
    }
    */
    public AddNewEmp():void
    {
        let temp:any[] = this.Employees;
        this.Employees = [];
        
        temp.push({empid:999,empname:'XYZ',dept:'Sales'});
        
        for (var index = 0; index < temp.length; index++) 
        {
            this.Employees.push(temp[index]);
        }
        
        // this.Employees.push({empid:999,empname:'KARTHIK',
        //     deptname:'Sales'});
    }
}

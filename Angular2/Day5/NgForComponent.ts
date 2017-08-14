import {Component} from '@angular/core';

@Component({
    selector:'ngfor-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>NgFor</h3>
                </div>

                <div class="panel-body">
                    <p *ngFor="let emp of Employees;let i=index">
                        {{i+1}}
                        {{emp.EmpId}} {{emp.EmpName}}
                    </p>

                    <table width="75%" align="center" border="1" class="table">
                        <thead>
                            <tr>
                                <td align='center'>Sr. No.</td>
                                <td align='center'>Employee Id</td>
                                <td align='center'>Employee Name</td>
                            </tr>
                        </thead>
                        <tr *ngFor="let emp of Employees;let i=index">
                            <td>{{i+1}}</td>
                            <td>{{emp.EmpId}}</td>
                            <td>{{emp.EmpName}}</td>
                        </tr>
                    </table>

                    <select [(ngModel)]="selectedemployee" (ngModelChange)="GetEmp()">
                        <option *ngFor="let emp of Employees">
                            {{emp.EmpId}}
                        </option>
                    </select>
                    <h4>Selected employee is: {{emp}}</h4>
                </div>
            </div>
        </div>
    `
})
export class NgForComponent
{
    public Employees:Employee[] = [
        new Employee(100,'Karthik'),
        new Employee(101,'Kevin'),
        new Employee(102,'Ajit'),
        new Employee(103,'Viren'),
        new Employee(104,'Tushar')
    ];
    public selectedemployee;
    public emp:Employee;

    GetEmp():void
    {
        console.log("GetEmp() called");
        //search for the employee
        var result = this.Employees.filter(emp=>emp.EmpId == this.selectedemployee)[0];
        //console.log("Emp Name is: " +result.EmpName);
        this.emp = result;
    }
}

class Employee
{
    constructor(public EmpId:number,public EmpName:string)
    {

    }
    public toString():string
    {
        return this.EmpId +", " +this.EmpName;
    }
    
}
import {Pipe} from '@angular/core';
//import {IFilter} from 'IFilter';
import {Employee} from './Employee';

@Pipe({
    name:'filter'
    
    
    
})
export class EmployeePipe
{
    public transform(source:Employee[]):Employee[]
    {
        console.log("transform called");
        return source;
    }
}
import {Pipe} from '@angular/core';

@Pipe({
    name:'squarepipe',
    pure:true
})
export class SquarePipe
{
    public transform(input:number):number
    {
        console.log("transform() of SquarePipe called");

        //do the transformation
        return (input * input);
    }
}
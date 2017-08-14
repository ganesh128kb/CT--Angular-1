import {Component} from '@angular/core';
import {CounterService} from './CounterService';

@Component({
    selector:'usecounterservice-component1',
    template:`
        <div class='container-fluid'>
            <div class='panel panel-primary'>
                <div class='panel-heading'>
                    <h4 align='center'>USE COUNTER SERVICE COMPONENT - 1</h4>
                </div>

                <div class='panel-body'>
                    <button class='btn btn-danger' 
                        (click)="Increment()">Increment</button>
                </div>
            </div>
        </div>
    `
})
export class UseCounterServiceComponent1
{
    
    constructor(private svc:CounterService)
    {

    }
    public Increment():void
    {
        console.log(this.svc.Increment());
    }
}
import {Component} from '@angular/core';
import {CounterService} from './CounterService';

@Component({
    selector:'usecounterservice-component',
    template:`
        <div class='container-fluid'>
            <div class='panel panel-primary'>
                <div class='panel-heading'>
                    <h4 align='center'>USE COUNTER SERVICE COMPONENT</h4>
                </div>

                <div class='panel-body'>
                    <button class='btn btn-danger' 
                        (click)="Increment()">Increment</button>
                </div>
            </div>
        </div>
    `
})
export class UseCounterServiceComponent
{
    private svc:CounterService;
    constructor(svc:CounterService)
    {
        this.svc = svc;
    }
    public Increment():void
    {
        console.log(this.svc.Increment());
    }
}
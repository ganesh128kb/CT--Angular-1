import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector:'ngswitch-component',
    template:`
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align="center">NgSwitch</h3>
                </div>
            <div class="panel-body">
               <ul [ngSwitch]="choice">
                    <li *ngSwitchWhen="1">First choice</li>
                    <li *ngSwitchWhen="2">Second choice</li>
                    <li *ngSwitchWhen="3">Third choice</li>
                    <li *ngSwitchWhen="4">Fourth choice</li>
                    <li *ngSwitchDefault>Default choice</li>
                </ul>

                <button class='btn btn-primary' (click)="NextChoice()">Next Choice</button>
                Your current choice: {{choice}}
            </div>  
    `
})
export class NgSwitchComponent
{
    public choice:number=0;

    public NextChoice():void
    {
        this.choice++;
    }
}

bootstrap(NgSwitchComponent);
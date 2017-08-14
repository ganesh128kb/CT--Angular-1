import {Component} from '@angular/core';

@Component({
    selector:'twowaydatabinding-component',
    template:`
        <div class='container-fluid'>
            <div class="panel panel-danger">
                <div class='panel-heading'>
                    <h4 align='center'>TWO WAY DATA BINDING COMPONENT</h4>
                </div>

                <div class='panel-body'>
                    <input type='text' [(ngModel)]="Text"/>
                    <h4>{{Text}}</h4>

                    <button class='btn btn-primary' [disabled]="!isenabled">Sample Button</button>
                    Enable/Disable button: <input type='checkbox' [(ngModel)]="isenabled"/>
                    
                    <h4>Button state:
                        <span *ngIf="isenabled">ENABLED</span> 
                        <span *ngIf="!isenabled">DISABLED</span>
                    </h4>

                    <button id="btn1" class="btn btn-default" (click)="OnClick($event)">Button1</button>
                    <button id="btn2" class="btn btn-default" (click)="OnClick($event)">Button2</button>
                </div>
            </div>
        </div>
    `
})
export class TwoWayDataBindingComponent
{
    private text:string = "Hello";
    public isenabled:boolean = true;

    set Text(value:string)
    {
        console.log("set called");
        this.text = value;
    } 
    get Text():string
    {
        console.log("get called");
        return this.text;
    }

    public OnClick(eventsource):void
    {
        //console.log("Button clicked");
        //console.log(eventsource.target.id);
    }
}
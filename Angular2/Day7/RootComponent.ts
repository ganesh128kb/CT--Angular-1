import {Component} from '@angular/core';

@Component({
    selector:'root-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align='center'>{{componenttitle}}</h3>
                </div>
                <div class="panel-body">
                    
                    <!--
                    <button (click)="ChangeComponentTitle()" 
                            class="btn btn-primary">
                        Change Component Title
                    </button>
                    <p [style.color]="forecolor">
                        {{message}}
                    </p>
                    -->

                    <!-- 
                    <twowaydatabinding-component>
                    </twowaydatabinding-component>
                    -->
                    <!--<ngfor-component></ngfor-component>-->
                    <!--
                    <countries-component>
                    </countries-component>
                    -->

                    <!--
                    <datepipecomponent>
                    </datepipecomponent>
                    -->

                    <!--
                    <currencypipecomponent>
                    </currencypipecomponent>
                    -->
                    
                    <!--
                    <numberpipecomponent>
                    </numberpipecomponent>
                    -->

                    <!--
                    <p>
                        Enter value:
                        <input type='text' [(ngModel)]="input"/>
                    </p>
                    <h2>
                        Square of {{input}} is: {{input | squarepipe}}
                    </h2>
                    -->
                    
                    <!--
                    <employeecomponent>
                    </employeecomponent>
                    -->

                    <!--
                    <usecustomdirective>
                    </usecustomdirective>
                    -->

                    <!--
                    <usecounterservice-component>
                    </usecounterservice-component>

                    <usecounterservice-component1>
                    </usecounterservice-component1>
                    -->

                    <!--
                    <module1-component></module1-component>
                    <module2-component></module2-component>
                    -->

                    
                    <territories-component>
                    </territories-component>
                    

                    <!--
                    <postterritory-component>
                    </postterritory-component>
                    -->

                    <!--ROUTING LINKS-->
                    <!--
                    <a routerLink="/xyz">BAD ROUTE</a> |
                    <a routerLink="/allusers">Browse All Users</a>
                    -->
                    <!--ROUTING LINKS-->

                    <hr/>

                    <!--ROUTER OUTLET-->
                    <!--<router-outlet></router-outlet>-->
                    <!--ROUTER OUTLET-->
                </div>
            </div>
        </div>
    `
    //templateUrl:'path of template file'
})
export class RootComponent
{
    constructor()
    {
        console.log("RootComponent bootstrapped");
    }

    //data member
    public componenttitle:string = "ROOT COMPONENT";
    public message:string = "This is Angular2";
    public forecolor:string = "red";

    public input:number = 0;

    //method
    public ChangeComponentTitle():void
    {
        this.componenttitle = "Welcome to Angular2";
        this.forecolor = "blue";
    }
}
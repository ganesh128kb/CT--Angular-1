import {Component} from '@angular/core';
import {HighLightDirective} from './HighLightDirective';

@Component({
    selector:'usecustomdirective',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align='center'>Custom Directive</h3>
                </div>

                <div class='panel-body'>
                    <p highlight [hc]="forecolor" 
                                [fc]="backcolor">
                       Custom directives in Angular2 - PARA1
                    </p>
                </div>
            </div>
        </div>
    `
})
export class UseCustomDirective
{
    public forecolor:string = "red";
    public backcolor:string = "yellow";
}


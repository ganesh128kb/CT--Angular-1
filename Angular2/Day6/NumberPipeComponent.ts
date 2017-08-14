import {Component} from '@angular/core';


@Component({
    selector:'numberpipecomponent',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align='center'>Decimal Pipe</h3>
                </div>
                <div class="panel-body">
                    <h4>pi (no formatting): {{pi}}</h4>
                    <h4>e (no formatting): {{e}}</h4>

                    <h4>e (3.5-8): {{e | number:'3.5-8'}}</h4>
                    <h4>e (3.2-5): {{e | number:'3.2-5'}}</h4>
                    
                    <h4>pi (no formatting): {{pi}}</h4>
                    <h4>pi (3.6-8): {{pi | number:'3.6-8'}}</h4>
                    <h4>pi (4.1-3): {{pi | number:'4.1-3'}}</h4>
                </div>
            </div>
        </div>
    `

})
export class NumberPipeComponent
{
    public pi: number = 3.141;
    public e: number = 12.718281828459045;
}

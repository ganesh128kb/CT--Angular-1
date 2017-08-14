import {Component} from '@angular/core';

@Component({
    selector:'badroute-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3>Invalid Route</h3>
                </div>
                <div class="panel-body">
                    <h3 align='center'>404 Error!! ROUTE NOT FOUND!!</h3>
                </div>
        </div>
    `
})
export class BadRouteComponent
{
    
}
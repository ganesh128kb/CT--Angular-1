import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'friends-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3>Friends of {{username}}</h3>
                </div>
                <div class="panel-body">
                    
                </div>
        </div>
    `
})
export class FriendsComponent
{
    public username:string;

    constructor(public routeinfo:ActivatedRoute)
    {
        var parentroute:ActivatedRoute = this.routeinfo.parent;

        parentroute.params.subscribe(
            (params) => { this.username = params.username; }
        ); 
    }
}
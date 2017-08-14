import {Component} from '@angular/core';
import {UserService} from './UserService';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'userinfo-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3>User Info - {{username}}</h3>
                </div>
                <div class="panel-body">
                    <a routerLink="friends">Friends</a> |
                    <a routerLink="family">Family</a>
                    <br/>
                    <br/>
                    <hr/>
                    <router-outlet></router-outlet>
                    <hr/>
                    <button class='btn btn-primary' routerLink='/allusers' (click)='AllUsers()'>Back</button>
                </div>
        </div>
    `
})
export class UserInfoComponent
{
    public username:string;

    constructor(public svc:UserService,public routeinfo:ActivatedRoute,public router:Router)
    {
        //since the parameters from the ActivatedRoute are returned as an observable, subscribe to it
        var ob = this.routeinfo.params.subscribe(
            (params) => { this.username = params.username; }
        );
    }
    public AllUsers():void
    {
        //this.router.navigate(['/allusers']);
    }
}
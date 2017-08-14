import {Component} from '@angular/core';
import {UserService} from './UserService';

@Component({
    selector:'allusers-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3>All Users</h3>
                </div>
                <div class="panel-body">
                   
                    <table class='table'>
                        <thead>
                            <tr>
                                <td align='center'>USER NAME</td>
                                <td align='center'>PASSWORD</td>
                            </tr>
                        </thead>
                        <tr *ngFor="let u of users">
                            <td align='center'>{{u.username}}</td>
                            <td align='center'>{{u.password}}</td>
                            <td align='center'>
                                <a routerLink="/user/{{u.username}}">More Info...</a>
                            </td>
                        </tr>
                    </table>
                </div>
        </div>
    `
})
export class AllUsersComponent
{
    public users:any[] = [];
    constructor(public svc:UserService)
    {
        this.users = svc.GetAllUsers();
    }
}
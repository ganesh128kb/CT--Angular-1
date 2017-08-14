
import {Component} from '@angular/core';

//FOR HTTP
import {Http,Headers,RequestOptions} from '@angular/http';         //2
import {Observable,Response} from 'rxjs/Observable';
import 'rxjs/Rx';      //rxjs operators

@Component({
    selector:'postterritory-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align="center">ADD A NEW TERRITORY</h3>
                </div>

                <div class="panel-body">
                    <p>
                        Enter territory id:
                        <input type='text' [(ngModel)]="newterritory.TerritoryID"/>
                    </p>

                    <p>
                        Enter territory description:
                        <input type='text' [(ngModel)]="newterritory.TerritoryDescription"/>
                    </p>

                    <p>
                        Enter region id:
                        <input type='text' [(ngModel)]="newterritory.RegionID"/>
                    </p>

                    <button class='btn btn-primary' (click)='AddTerritory()'>Add Territory</button>

                    <hr/>
                    <span>{{postresult}}</span> <br/>
                    <span>{{error}}</span>
                </div>
            </div>
        </div>
    `
})
export class PostTerritoryComponent
{
    public newterritory = {TerritoryID:"",TerritoryDescription:"",RegionID:0};
    public postresult:any;
    public error:any;

    constructor(private http:Http)
    {
        
    }
    public AddTerritory():void
    {
        //send a POST request to the REST service

        //1. Convert the data to be sent into a JSON format
        var datatobesent = JSON.stringify(this.newterritory);

        console.log(datatobesent);

        //2. Fire the POST request and obtain an Observable
        var headers = new Headers();
        headers.append('Content-Type','application/json');

        var options = new RequestOptions({headers:headers});

        var observable = this.http.post('http://localhost:52525/Territories',datatobesent,options).map((response:Response) => response.json());

        //alert(datatobesent);

        //3. Subscribe to the observable and get the response
        observable.subscribe(
            (data) => this.postresult = data,
            (error) => this.error =  "ERROR: " +error.json().Message
        );
    }
}
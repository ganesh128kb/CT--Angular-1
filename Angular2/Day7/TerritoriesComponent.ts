import {Component} from '@angular/core';

//FOR HTTP
import {Http} from '@angular/http';
import {Observable,Response} from 'rxjs/Observable';
//import 'rxjs/Rx';      //rxjs operators

@Component({
    selector:'territories-component',
    template:`
        <div class='container-fluid'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 align='center'>SERVER COMMUNICATION IN ANGULAR 2.0</h4>
                </div>
                <div class='panel-body' style="overflow:scroll;height:350px;">
                    <p>
                        Enter territory id: 
                        <input type="text" [(ngModel)]="territoryid"/>
                        <button class='btn btn-default' (click)="GetTerritory()">Get Territory</button>
                    </p>
                        <div>
                            <div *ngIf="territory!=undefined">
                                Territory Id: {{territory.TerritoryID}}<br/>
                                Territory Description: {{territory.TerritoryDescription}}<br/>
                                Region Id: {{territory.RegionID}}<br/>
                            </div>

                            <div *ngIf="error!=undefined" style="color:red;">
                                {{error}}
                            </div>
                        </div>
                    <button class='btn btn-default' 
                        (click)="GetAllTerritories()">Get All Territories</button>
                    <table class='table'>
                        <thead>
                            <tr>
                                <td align='center'>Territory ID</td>
                                <td align='center'>Territory Description</td>
                                <td align='center'>Region ID</td>
                            </tr>
                        </thead>
                        <tr *ngFor="let t of data | async">
                            <td align='center'>{{t.TerritoryID}}</td>
                            <td align='center'>{{t.TerritoryDescription}}</td>
                            <td align='center'>{{t.RegionID}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class TerritoriesComponent
{
    data:any;
    // private data:any[] = [];
    public territoryid:string = "";
    public territory = undefined;
    public error = undefined;

    constructor(private http:Http)
    {
        
    }
    public GetAllTerritories():void
    {
        var observable = this.http.get('http://localhost:52525/Territories').
                map((response:Response) => response.json());
        
        
        // observable.subscribe(
        //     (data) =>  {this.data = data; console.log(this.data.length);},
        //     (error) => console.log(error)
        // );
        this.data = observable;
    }
    public GetTerritory():void
    {
        this.error = undefined;
        this.territory = undefined;

        var observable = this.http.get('http://localhost:52525/Territories/' +this.territoryid).map((response:Response) => response.json());
        observable.subscribe(
            (data) =>  {this.territory = data},
            (error) => this.error = error.json().Message
        );
    }
}
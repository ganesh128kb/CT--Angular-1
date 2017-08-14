import {Component} from '@angular/core';
import {CitiesComponent} from './CitiesComponent';

@Component({
    selector:'countries-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>Countries Component (Parent)</h3>
                </div>
                <div class="panel-body">
                <p>
                    Select a country:
                    <select [(ngModel)]="selectedcountry">
                        <option *ngFor="let c of countries">
                            {{c}}
                        </option>
                    </select>
                </p>
                    <cities-component [Country]="selectedcountry" 
                                      (citynotification)="GetSelectedCity($event)">
                    </cities-component>
                    <h4>Selected city from child component is:
                        {{selectedcity}}
                    </h4>
                </div>
        </div>
    `
})
export class CountriesComponent
{
    public countries:string[] = [
        'India','Australia','England'
    ];
    public selectedcountry:string;
    public selectedcity:string;

    public GetSelectedCity(payload):void
    {
        console.log("Selected city is: " +payload);
        this.selectedcity = payload;
    }
}
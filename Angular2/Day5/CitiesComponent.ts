import {Component,Input,EventEmitter,Output} from '@angular/core';


@Component({
    selector:'cities-component',
    template:`
        <div class="container-fluid">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3>Cities Component (Child)</h3>
                </div>
                <div class="panel-body">
                    <p>
                        Cities for country: {{selectedcountry}}
                        <select [(ngModel)]="selectedcity" 
                                (ngModelChange)="NotifyParent()">
                            <option *ngFor="let c of cities">
                                {{c}}
                            </option>
                        </select>
                    </p>
                </div>
        </div>
    `
})
export class CitiesComponent
{
    public cities:string[] = [];
    
    
    
    public selectedcity:string;
    
    @Output()
    public citynotification:EventEmitter<string> = new EventEmitter<string>();
    
    //value will come from the parent component
    
    public selectedcountry:string;

    @Input()
    public set Country(value)
    {
        this.selectedcountry = value;
        this.GetCities();
    }

    public GetCities():void
    {
        this.cities = [];
        if(this.selectedcountry == "India")
        {
            this.cities.push('Mumbai');
            this.cities.push('Delhi');
        }
        else if(this.selectedcountry == "Australia")
        {
            this.cities.push('Perth');
            this.cities.push('Sydney');
        }
        else if(this.selectedcountry == "England")
        {
            this.cities.push('London');
            this.cities.push('Manchester');
        }
    }

    public NotifyParent():void
    {
        //send the notification to the parent
        this.citynotification.emit(this.selectedcity);
    }
}
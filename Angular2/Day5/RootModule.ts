import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RootComponent} from './RootComponent';

import {TwoWayDataBindingComponent} from './TwoWayDataBindingComponent';
import {NgForComponent} from './NgForComponent';
import {CountriesComponent} from './CountriesComponent';
import {CitiesComponent} from './CitiesComponent';

import {DatePipeComponent} from './DatePipeComponent';
import {CurrencyPipeComponent} from './CurrencyPipeComponent';
import {NumberPipeComponent} from './NumberPipeComponent';
import {SquarePipe} from './SquarePipe';
import {EmployeePipe} from './EmployeePipe';
import {EmployeeComponent} from './EmployeeComponent';
import {HighLightDirective} from './HighLightDirective';
import {UseCustomDirective} from './UseCustomDirective';

import {UseCounterServiceComponent} from './UseCounterServiceComponent';
import {UseCounterServiceComponent1} from './UseCounterServiceComponent1';

import {CounterService} from './CounterService';

import {Module1} from './Module1/Module1';
import {Module2} from './Module2/Module2';

import {TerritoriesComponent} from './TerritoriesComponent';
import {HttpModule} from '@angular/http';
import {PostTerritoryComponent} from './PostTerritoryComponent';

//==============ANGULAR 2 ROUTING==================
import {RouterModule} from '@angular/router';
import {UserService} from './routing/UserService';
import {AllUsersComponent} from './routing/AllUsersComponent';
import {BadRouteComponent} from './routing/BadRouteComponent';
import routes from './routing/AppRoutes';
import {UserInfoComponent} from './routing/UserInfoComponent';

import {CanDeactivateGuardService} from './routing/CanDeactivateGuardService';
import {FriendsComponent} from './routing/FriendsComponent';
import {FamilyComponent} from './routing/FamilyComponent';
//==============ANGULAR 2 ROUTING==================


@NgModule({
    imports:[BrowserModule,FormsModule,Module1,Module2,HttpModule],
    declarations:[RootComponent,
        TwoWayDataBindingComponent,
        NgForComponent,
        CountriesComponent,CitiesComponent,
        DatePipeComponent,
        CurrencyPipeComponent,
        NumberPipeComponent,
        SquarePipe,EmployeePipe,EmployeeComponent,HighLightDirective,
        UseCustomDirective,UseCounterServiceComponent,
        UseCounterServiceComponent1,
        TerritoriesComponent,
        PostTerritoryComponent],
        //AllUsersComponent,
        //BadRouteComponent,
        //UserInfoComponent,FriendsComponent,FamilyComponent],
    providers:[CounterService,UserService,CanDeactivateGuardService],     //for services=
    bootstrap:[RootComponent]
})
export class RootModule
{
    constructor()
    {
        console.log("RootModule bootstrapped");
    }
}


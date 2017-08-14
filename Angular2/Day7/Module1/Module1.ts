import {NgModule} from '@angular/core';
import {Module1_Component} from './Module1_Component';

@NgModule({
    declarations:[Module1_Component],
    exports:[Module1_Component]
})
export class Module1
{
    constructor()
    {
        console.log("Module1 loaded");
    }
}

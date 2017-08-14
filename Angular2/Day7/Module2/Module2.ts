import {NgModule} from '@angular/core';
import {Module2_Component} from './Module2_Component';

@NgModule({
    declarations:[Module2_Component],
    exports:[Module2_Component]
})
export class Module2
{
    constructor()
    {
        console.log("Module2 loaded");
    }
}

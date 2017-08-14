import {Component} from '@angular/core';

@Component({
    selector:'currencypipecomponent',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align='center'>Currency Pipe</h3>
                </div>
                <div class="panel-body">
                    <h4>Amount in INR: {{amount|currency:currencycode:true}}</h4>
                    <h4>Amount in USD: {{amount|currency:'USD':true}}</h4>
                </div>
            </div>
        </div>
    `
})
export class CurrencyPipeComponent
{
    public amount: number = 1.34957;
    public currencycode:string = 'INR';
}

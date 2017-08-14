import {Component} from '@angular/core';

@Component({
    selector:'datepipecomponent',
    template:`
        <div class="container-fluid">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 align="center">Date Pipe</h3>
                </div>

                <div class="panel-body">
                    <h4>Meduim date(with time): {{CurrentDate|date:'medium'}}</h4>
                    <h4>Short date(with time): {{CurrentDate|date:'short'}}</h4>
                    <h4>Full date: {{CurrentDate|date:'fullDate'}}</h4>
                    <h4>Long date: {{CurrentDate|date:'longDate'}}</h4>
                    <h4>Meduim date(without time): {{CurrentDate|date:'mediumDate'}}</h4>
                    <h4>Short date(without time): {{CurrentDate|date:'shortDate'}}</h4>
                    <h4>Meduim time: {{CurrentDate|date:'mediumTime'}}</h4>
                    <h4>Short time: {{CurrentDate|date:'shortTime'}}</h4>

                    <h4>Custom format (date): {{CurrentDate|date:'EEE, MMMM dd, yyyy'}}</h4>
                    <h4>Custom format (time 24hr): {{CurrentDate|date:'HH:mm:ss'}}</h4>
                    <h4>Custom format (time 12hr): {{CurrentDate|date:'hh:mm:ss'}}</h4>
                </div>
            </div>
        </div>
    `
})
export class DatePipeComponent
{
    public CurrentDate:Date = new Date();
}

import {CanDeactivate} from '@angular/router';

export class CanDeactivateGuardService implements CanDeactivate
{
    public canDeactivate():boolean
    {
        //some business logic which checks for some condition
        return confirm('(GUARD): Navigate away?');
    }
}
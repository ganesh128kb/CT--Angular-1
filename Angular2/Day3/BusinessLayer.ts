import {ServiceLayer} from './ServiceLayer';

export class BusinessLayer
{
    public static Business():void
    {
        console.log("BusinessLayer.Business()");
        ServiceLayer.Service();
    }
}
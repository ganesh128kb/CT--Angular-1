import {DataAccessLayer} from 'DAL';

export class ServiceLayer
{
    public static Service():void
    {
        console.log("ServiceLayer.Service()");
        DataAccessLayer.DataAccess();
    }
}
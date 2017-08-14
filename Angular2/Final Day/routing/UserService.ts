export class UserService
{
    private users = [
        {username:'karthik',password:'karthik'},
        {username:'ajit',password:'ajit'},
        {username:'viren',password:'viren'},
        {username:'tushar',password:'tushar'},
        {username:'guru',password:'guru'}
    ];

    public GetAllUsers():any[]
    {
        return this.users;
    }
}
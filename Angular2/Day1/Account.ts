class Account
{
    private accid:number;
    private accname:string;
    private currentbalance:number;

    private static count:number = 0;

    constructor(accid:number,accname:string,balance:number)
    {
        this.accid = accid;
        this.accname = accname;
        this.currentbalance = balance;
        ++Account.count;    //increment static member
        console.log("Constructor called");
        console.log("Constructor called");
    }
    public GetAccountDetails():void
    {
        console.log("Account id: " +this.accid);
        console.log("Name: " +this.accname);
        console.log("Current Balance: " +this.currentbalance);
        console.log();
    }
    public static CountObjects():void
    {
        console.log("Total objects: " +Account.count);
    }
}

//access the static method directly
Account.CountObjects();

let a1:Account = new Account(1,"ABC",50000.00);
let a2:Account = new Account(2,"XYZ",75000.00);

let a3:Account = new Account(3,"Ganesh",50000.00);
let a4:Account = new Account(5,"Raviraj",75000.00);

a1.GetAccountDetails();
a2.GetAccountDetails();

Account.CountObjects();
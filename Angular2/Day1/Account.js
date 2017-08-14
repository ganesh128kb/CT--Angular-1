var Account = (function () {
    function Account(accid, accname, balance) {
        this.accid = accid;
        this.accname = accname;
        this.currentbalance = balance;
        ++Account.count; //increment static member
        console.log("Constructor called");
        console.log("Constructor called");
    }
    Account.prototype.GetAccountDetails = function () {
        console.log("Account id: " + this.accid);
        console.log("Name: " + this.accname);
        console.log("Current Balance: " + this.currentbalance);
        console.log();
    };
    Account.CountObjects = function () {
        console.log("Total objects: " + Account.count);
    };
    return Account;
}());
Account.count = 0;
//access the static method directly
Account.CountObjects();
Account.CountObjects();
var a1 = new Account(1, "ABC", 50000.00);
var a2 = new Account(2, "XYZ", 75000.00);
var a3 = new Account(3, "Ganesh", 50000.00);
var a4 = new Account(5, "Raviraj", 75000.00);
a1.GetAccountDetails();
a2.GetAccountDetails();

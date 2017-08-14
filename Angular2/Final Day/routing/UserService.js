System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService;
    return {
        setters:[],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.users = [
                        { username: 'karthik', password: 'karthik' },
                        { username: 'ajit', password: 'ajit' },
                        { username: 'viren', password: 'viren' },
                        { username: 'tushar', password: 'tushar' },
                        { username: 'guru', password: 'guru' }
                    ];
                }
                UserService.prototype.GetAllUsers = function () {
                    return this.users;
                };
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

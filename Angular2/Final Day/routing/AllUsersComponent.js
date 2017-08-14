System.register(['@angular/core', './UserService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, UserService_1;
    var AllUsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            AllUsersComponent = (function () {
                function AllUsersComponent(svc) {
                    this.svc = svc;
                    this.users = [];
                    this.users = svc.GetAllUsers();
                }
                AllUsersComponent = __decorate([
                    core_1.Component({
                        selector: 'allusers-component',
                        template: "\n        <div class=\"container-fluid\">\n            <div class=\"panel panel-danger\">\n                <div class=\"panel-heading\">\n                    <h3>All Users</h3>\n                </div>\n                <div class=\"panel-body\">\n                   \n                    <table class='table'>\n                        <thead>\n                            <tr>\n                                <td align='center'>USER NAME</td>\n                                <td align='center'>PASSWORD</td>\n                            </tr>\n                        </thead>\n                        <tr *ngFor=\"let u of users\">\n                            <td align='center'>{{u.username}}</td>\n                            <td align='center'>{{u.password}}</td>\n                            <td align='center'>\n                                <a routerLink=\"/user/{{u.username}}\">More Info...</a>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService])
                ], AllUsersComponent);
                return AllUsersComponent;
            }());
            exports_1("AllUsersComponent", AllUsersComponent);
        }
    }
});

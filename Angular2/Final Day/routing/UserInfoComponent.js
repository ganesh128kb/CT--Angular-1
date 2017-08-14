System.register(['@angular/core', './UserService', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, UserService_1, router_1;
    var UserInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserInfoComponent = (function () {
                function UserInfoComponent(svc, routeinfo, router) {
                    var _this = this;
                    this.svc = svc;
                    this.routeinfo = routeinfo;
                    this.router = router;
                    //since the parameters from the ActivatedRoute are returned as an observable, subscribe to it
                    var ob = this.routeinfo.params.subscribe(function (params) { _this.username = params.username; });
                }
                UserInfoComponent.prototype.AllUsers = function () {
                    //this.router.navigate(['/allusers']);
                };
                UserInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'userinfo-component',
                        template: "\n        <div class=\"container-fluid\">\n            <div class=\"panel panel-danger\">\n                <div class=\"panel-heading\">\n                    <h3>User Info - {{username}}</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <a routerLink=\"friends\">Friends</a> |\n                    <a routerLink=\"family\">Family</a>\n                    <br/>\n                    <br/>\n                    <hr/>\n                    <router-outlet></router-outlet>\n                    <hr/>\n                    <button class='btn btn-primary' routerLink='/allusers' (click)='AllUsers()'>Back</button>\n                </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
                ], UserInfoComponent);
                return UserInfoComponent;
                var _a, _b;
            }());
            exports_1("UserInfoComponent", UserInfoComponent);
        }
    }
});

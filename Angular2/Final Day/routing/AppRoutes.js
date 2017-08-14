System.register(['./AllUsersComponent', './BadRouteComponent', '@angular/router', './UserInfoComponent', './CanDeactivateGuardService', './FriendsComponent', './FamilyComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AllUsersComponent_1, BadRouteComponent_1, router_1, UserInfoComponent_1, CanDeactivateGuardService_1, FriendsComponent_1, FamilyComponent_1;
    var approutes;
    return {
        setters:[
            function (AllUsersComponent_1_1) {
                AllUsersComponent_1 = AllUsersComponent_1_1;
            },
            function (BadRouteComponent_1_1) {
                BadRouteComponent_1 = BadRouteComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (UserInfoComponent_1_1) {
                UserInfoComponent_1 = UserInfoComponent_1_1;
            },
            function (CanDeactivateGuardService_1_1) {
                CanDeactivateGuardService_1 = CanDeactivateGuardService_1_1;
            },
            function (FriendsComponent_1_1) {
                FriendsComponent_1 = FriendsComponent_1_1;
            },
            function (FamilyComponent_1_1) {
                FamilyComponent_1 = FamilyComponent_1_1;
            }],
        execute: function() {
            approutes = [
                { path: '', component: AllUsersComponent_1.AllUsersComponent },
                { path: 'allusers', component: AllUsersComponent_1.AllUsersComponent },
                { path: 'user/:username', component: UserInfoComponent_1.UserInfoComponent, canDeactivate: [CanDeactivateGuardService_1.CanDeactivateGuardService],
                    children: [
                        { path: '' },
                        { path: 'friends', component: FriendsComponent_1.FriendsComponent },
                        { path: 'family', component: FamilyComponent_1.FamilyComponent }
                    ]
                },
                { path: '**', component: BadRouteComponent_1.BadRouteComponent }
            ];
            exports_1("default",router_1.RouterModule.forRoot(approutes));
        }
    }
});

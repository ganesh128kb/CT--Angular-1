System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CanDeactivateGuardService;
    return {
        setters:[],
        execute: function() {
            CanDeactivateGuardService = (function () {
                function CanDeactivateGuardService() {
                }
                CanDeactivateGuardService.prototype.canDeactivate = function () {
                    //some business logic which checks for some condition
                    return confirm('(GUARD): Navigate away?');
                };
                return CanDeactivateGuardService;
            }());
            exports_1("CanDeactivateGuardService", CanDeactivateGuardService);
        }
    }
});

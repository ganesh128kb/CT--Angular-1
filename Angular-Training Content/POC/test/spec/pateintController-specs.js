describe('patientController', function () {
    beforeEach(module('mainApp'));
    module(function ($provide) {
        $provide.value('PatientDataService', {
            getPatientData: jasmine.createSpy('getPatientData').andCallFake(function () {
                var deferred = $q.defer();
                deferred.resolve({
                    "data": [
                        {
                            "name": "John",
                            "pr1": "100",
                            "pr2": "80",
                            "pr3": "70"
            },
                        {
                            "name": "Smith",
                            "pr1": "90",
                            "pr2": "70",
                            "pr3": "120"
            },
                        {
                            "name": "Jane",
                            "pr1": "80",
                            "pr2": "90",
                            "pr3": "100"
            },
                        {
                            "name": "Rocky",
                            "pr1": "60",
                            "pr2": "80",
                            "pr3": "70"
            }
        ]
                });
                return {
                    promise: deferred.promise,
                    xhr: {}
                };
            }),
            pushPatientData: getPatientData

        });
    });


    var $controller;
    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    var $scope, controller;
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('patientController', {
            $scope: $scope
        });
    }));

    it('should have a controller', function () {
        expect(controller).toBeDefined();
    });

    it('scope.patientsList not to be empty', function () {
        expect($scope.patientsList).not.toBe([]);
    });

    it('scope.patientsList not to be empty', function () {
        $scope.pushing();
        expect($scope.patientsList).not.toBe([]);
    });

});

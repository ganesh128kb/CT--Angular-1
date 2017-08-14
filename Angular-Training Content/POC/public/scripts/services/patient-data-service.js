angular.module("mainApp")
    .service('PatientDataService', ['$http', function ($http) {
        this.pushPatientData = function (data) {
            var request = {
                url: 'http://localhost:8081/users',
                method: 'POST',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            return $http(request);
        };

        this.getPatientData = function () {
            var url = "http://localhost:8081/users";
            return $http.get(url);
        };
}]);
angular.module("mainApp").controller('patientController', ['$scope', 'PatientDataService',
function ($scope, PatientDataService) {
        PatientDataService.getPatientData().then(function success(response) {
            $scope.patientsList = response.data.data;
        });
        $scope.pushing = function () {

            PatientDataService.pushPatientData($scope.push).then(function success(response) {
                $scope.patientsList = response.data.data;
            });
        }
}]);
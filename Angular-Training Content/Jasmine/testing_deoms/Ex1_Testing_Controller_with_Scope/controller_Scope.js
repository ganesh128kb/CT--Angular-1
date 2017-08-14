var app =angular.module('notesApp', []);

app.controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
})
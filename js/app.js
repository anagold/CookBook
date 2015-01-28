var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('mainCtrl', function($scope){
    $scope.message = "main controller";
});

myApp.controller('breakfastController', function($scope) {
    $scope.message = "breakfast controller";    
});
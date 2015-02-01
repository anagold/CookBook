var myApp = angular.module('myApp', ['ngRoute', 'firebase']);
myApp.controller('mainCtrl', function($scope, ItemsService, ItemsServiceBS, ItemsServiceLU, ItemsServiceDS, ItemsServiceBV) {
    $scope.categories = [
        {"id": 0, "url": "#home", "name": "Home", "icon": "glyphicon-home"},
        {"id": 1, "url": "#breakfast", "name": "Breakfast", "icon": "glyphicon-apple"},
        {"id": 2, "url": "#lunch", "name": "Lunch", "icon": "glyphicon-cutlery"},
        {"id": 3, "url": "#dessert", "name": "Dessert", "icon": "glyphicon-ice-lolly-tasted"},
        {"id": 4, "url": "#beverage", "name": "Beverage", "icon": "glyphicon-glass"}
    ];

    $scope.placeHolderTitle = "Enter bookmark title...";
    $scope.placeHolderUrl = "Enter bookmark url...";
    
    //$scope.isNotLogged = true;
    $scope.isUpdated = false;
    $scope.itemId = null;
    
    /* --- AUTHORIZATION ---
    $scope.register = function () {
        var ref = new Firebase("https://anagold.firebaseio.com/");
        ref.createUser({
            emial: $scope.email,
            password: $scope.password
        }, function(error) {
            if (error === null) {
                console.log("User created successfully");
            } else {
                console.log("Error creating user: ", error);
            }
        });
    };*/
    
    // --- SIGNING IN ---
    /*$scope.signIn = function () {
        $scope.isNotLogged = false;
        alert($scope.isNotLogged);
    }
    
    // --- LOGOUT --- 
    $scope.logout = function () {
        $scope.isNotLogged = true;
    }
    
    // --- SHOW AND HIDE DIVS IN INDEX ---
    $scope.hideSign = false;
    $scope.hideRegi = true;
    
    $scope.showSign = function() {
        $scope.hideSign = false;
        $scope.hideRegi = true;
    };
    
    $scope.showRegi = function() {
        $scope.hideSign = true;
        $scope.hideRegi = false;
    };
    
    $scope.cancelReSi = function() {
        $scope.hideSign = true;
        $scope.hideRegi = true;
    };*/
    
    // --- SHOW AND HIDE DIVS IN SUBPAGE ---
    $scope.hideEdit = true;
    $scope.hideCreate = true;
    //$scope.isDisabled = true;
    
    $scope.showEditing = function() {
        $scope.hideEdit = false;
        $scope.hideCreate = true;
        //$scope.isDisabled = true;
    };
    
    $scope.showCreating = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = false;
        //$scope.isDisabled = true;
    };
    
    $scope.cancelEditing = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
        //$scope.isDisabled = false;
    };
    
    $scope.cancelCreating = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
       // $scope.isDisabled = false;
    };
});

myApp.controller('openTab', ['$scope', '$window',
    function($scope, $window) {
        $scope.openTab = function(id, bookmarkUrl){
            $window.open(bookmarkUrl);
        };
    }
]);
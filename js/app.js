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
    $scope.bookmarks = ItemsService.getItems();
    $scope.isUpdated = false;
    $scope.itemId = null;
   
    /*$scope.SignIn = function($scope) {
        var username = $scope.user.email;
        var password = $scope.user.password;
        
        var firebaseObj = null;
        $scope.getRef = function () {
            firebaseObj = ItemService.getRef();
        }
        var loginObj = $firebaseSimpleLogin(firebaseObj);
        
        loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
    }*/
    
    // --- SHOW AND HIDE DIVS IN INDEX ---
    $scope.hideSign = true;
    $scope.hideRegi = true;
    
    $scope.showSign = function() {
        $scope.placeHolderTitle = "Enter bookmark title...";
        $scope.placeHolderUrl = "Enter bookmark url...";
        $scope.hideSign = false;
        $scope.hideRegi = true;
    };
    
    $scope.showRegi = function() {
        $scope.placeHolderTitle = "Enter bookmark title...";
        $scope.placeHolderUrl = "Enter bookmark url...";
        $scope.hideSign = true;
        $scope.hideRegi = false;
    };
    
    $scope.cancelReSi = function() {
        $scope.hideSign = true;
        $scope.hideRegi = true;
    };
    
    // --- SHOW AND HIDE DIVS IN SUBPAGE ---
    $scope.hideEdit = true;
    $scope.hideCreate = true;
    
    $scope.showEditing = function() {
        $scope.hideEdit = false;
        $scope.hideCreate = true;
    };
    
    $scope.showCreating = function() {
        $scope.placeHolderTitle = "Enter bookmark title...";
        $scope.placeHolderUrl = "Enter bookmark url...";
        $scope.hideEdit = true;
        $scope.hideCreate = false;
    };
    
    $scope.cancelEditing = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
    };
    
    $scope.cancelCreating = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
    };
    
    // --- SET FIELD FORMS ---
    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, bmT, bmU) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = bmT;
        $scope.bookmarkUrlEdit = bmU;  
    };
});

myApp.controller('openTab', ['$scope', '$window',
    function($scope, $window) {
        $scope.openTab = function(id, bookmarkUrl){
            $window.open(bookmarkUrl);
        };
    }
]);
var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.controller('mainCtrl', function($scope, ItemsService) {
    $scope.categories = [
        {"id": 0, "url": "#home", "name": "Home", "icon": "glyphicon-home"},
        {"id": 1, "url": "#breakfast", "name": "Breakfast", "icon": "glyphicon-apple"},
        {"id": 2, "url": "#lunch", "name": "Lunch", "icon": "glyphicon-cutlery"},
        {"id": 3, "url": "#dessert", "name": "Dessert", "icon": "glyphicon-ice-lolly-tasted"},
        {"id": 4, "url": "#beverage", "name": "Beverage", "icon": "glyphicon-glass"}
    ];
    
    $scope.bookmarks = ItemsService.getItems();
    $scope.isUpdated = false;
  
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
    
    $scope.currentCategory = null;
    function setCurrentCategory(category){
        $scope.currentCategory = category;
    }
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.test = function (id) {
        alert(id);
        if ( bookCat === setCurrentCategory ) {
            return true;
        }else{
            return false;
        };
    }
});

myApp.controller('openTab', ['$scope', '$window',
    function($scope, $window) {
        $scope.openTab = function(id, bookmarkUrl){
            $window.open(bookmarkUrl);
        };
    }
]);
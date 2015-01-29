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
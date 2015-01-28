var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.controller('mainCtrl', function($scope) {
    
});

myApp.controller('breakfastController', function($scope, ItemsService){
    $scope.bookmarks = ItemsService.getItems();
    $scope.isUpdated = false;
    $scope.category = "breakfast";
    
    $scope.addItem = function(title, url) {
        ItemsService.addItem({
            title: title,
            url: url,
            category: "breakfast"
        });
    };
    
    $scope.removeItem = function (id) {
        ItemsService.removeItem(id);
    };
    $scope.updateItem = function (id) {
        ItemsService.upadeItem(id);
    };
});
 
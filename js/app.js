var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.controller('mainCtrl', function($scope) {
    
});

myApp.controller('breakfastController', function($scope, ItemsService){
    $scope.bookmarks = ItemsService.getItems();
    $scope.isUpdated = false;
    $scope.category = "breakfast";
    $scope.idItem = 0;
    
    $scope.addItem = function(title, url) {
        ItemsService.addItem({
            title: title,
            url: url,
            category: $scope.category
        });
    };
    
    $scope.removeItem = function (id) {
        ItemsService.removeItem(id);
    };
    $scope.updateItem = function() {
        $scope.bookmarks[idItem].title = $scope.bookmarkTitle;
        $scope.bookmarks[idItem].url = $scope.bookmarkUrl;
        ItemsService.upadeItem(idItem);
    };
    
    
    $scope.hideEdit = true;
    $scope.hideCreate = true;
    
    $scope.showEditing = function() {
        $scope.hideEdit = false;
        $scope.hideCreate = true;
        
    };
    
    $scope.showCreating = function() {
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
    
    
    $scope.placeHolderTitle = "Enter bookmark title...";
    $scope.placeHolderUrl = "Enter bookmark url...";
    $scope.resetForm = function () {
        $scope.bookmarkTitle = "";
        $scope.bookmarkUrl = "";
    };
    
    $scope.editForm = function (itemId) {
        idItem = itemId;
        $scope.bookmarkTitle = $scope.bookmarks[itemId].title;
        $scope.bookmarkUrl = $scope.bookmarks[itemId].url;  
    };
});


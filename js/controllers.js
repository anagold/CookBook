// -------------------
// ---- Breakfast ----
// -------------------
myApp.controller('breakfastController', function($scope, ItemsService){
    $scope.category = "Breakfast";
    $scope.idItem = 0;
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
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
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
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

// -------------------
// ------ Lunch ------
// -------------------
myApp.controller('lunchController', function($scope, ItemsService){
    $scope.category = "Lunch";
    $scope.idItem = 0;
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
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
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
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

// -------------------
// ----- Dessert -----
// -------------------
myApp.controller('dessertController', function($scope, ItemsService){
    $scope.category = "Dessert";
    $scope.idItem = 0;
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
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
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
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

// -------------------
// ---- Beverage -----
// -------------------
myApp.controller('beverageController', function($scope, ItemsService){
    $scope.category = "Beverage";
    $scope.idItem = 0;
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
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
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
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
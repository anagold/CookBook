// -------------------
// ---- Breakfast ----
// -------------------
myApp.controller('breakfastController', function($scope, ItemsServiceBS){
    $scope.category = "Breakfast";
    $scope.bookmarks = ItemsServiceBS.getItems();
    
    $scope.addItem = function(title, url, id) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
        ItemsServiceBS.addItem({
            title: title,
            url: url,
            category: $scope.category
        }, "breakfast");
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceBS.removeItem(id);
    };
    
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitle;
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrl;
        ItemsServiceBS.upadeItem($scope.itemId);
    };
});

// -------------------
// ------ Lunch ------
// -------------------
myApp.controller('lunchController', function($scope, ItemsServiceLU){
    $scope.category = "Lunch";
    $scope.bookmarks = ItemsServiceLU.getItems();
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
        ItemsServiceLU.addItem({
            title: title,
            url: url,
            category: $scope.category
        });
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceLU.removeItem(id);
    };
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitle;
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrl;
        ItemsServiceLU.upadeItem($scope.itemId);
    };
    
});

// -------------------
// ----- Dessert -----
// -------------------
myApp.controller('dessertController', function($scope, ItemsServiceDS){
    $scope.category = "Dessert";
    $scope.bookmarks = ItemsServiceDS.getItems();
    
    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
    
        ItemsServiceDS.addItem({
            title: title,
            url: url,
            category: $scope.category
        });
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceDS.removeItem(id);
    };
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitle;
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrl;
        ItemsServiceDS.upadeItem($scope.itemId);
    };
});

// -------------------
// ---- Beverage -----
// -------------------
myApp.controller('beverageController', function($scope, ItemsServiceBV){
    $scope.category = "Beverage";
    $scope.bookmarks = ItemsServiceBV.getItems();

    $scope.addItem = function(title, url) {
        if(!(/^http:\/\//.test(url))){
            url = "http://" + url;
        }
        
        ItemsServiceBV.addItem({
            title: title,
            url: url,
            category: $scope.category
        });
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceBV.removeItem(id);
    };
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitle;
        if(!(/^http:\/\//.test($scope.bookmarkUrl))){
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrl;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrl;
        ItemsServiceBV.upadeItem($scope.itemId);
    };
    
});

// -------------------
// ------ Home -------
/* -------------------
myApp.controller('homeController', function($scope, ItemService) {
    
});*/
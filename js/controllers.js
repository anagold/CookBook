// -------------------
// ---- Breakfast ----
// -------------------
myApp.controller('breakfastController', function($scope, ItemsServiceBS){
    $scope.category = "Breakfast";
    $scope.bookmarks = ItemsServiceBS.getItems();
    
    $scope.cancelEditing();
    $scope.cancelCreating();
  
    $scope.addItem = function(title, url, id) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
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
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        if (!/^(f|ht)tps?:\/\//i.test($scope.bookmarkUrlEdit)) {
            $scope.bookmarkUrlEdit = "http://" + $scope.bookmarkUrlEdit;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceBS.upadeItem($scope.itemId);
    };
    
     // --- SET FIELD FORMS ---
    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});

// -------------------
// ------ Lunch ------
// -------------------
myApp.controller('lunchController', function($scope, ItemsServiceLU){
    $scope.category = "Lunch";
    $scope.bookmarks = ItemsServiceLU.getItems();
    $scope.cancelEditing();
    $scope.cancelCreating();
    
    $scope.addItem = function(title, url) {
       if (!/^(f|ht)tps?:\/\//i.test(url)) {
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
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
         if (!/^(f|ht)tps?:\/\//i.test($scope.bookmarkUrlEdit)) {
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrlEdit;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceLU.upadeItem($scope.itemId);
    };
    
    // --- SET FIELD FORMS ---
    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});

// -------------------
// ----- Dessert -----
// -------------------
myApp.controller('dessertController', function($scope, ItemsServiceDS){
    $scope.category = "Dessert";
    $scope.bookmarks = ItemsServiceDS.getItems();
    $scope.cancelEditing();
    $scope.cancelCreating();
    
    $scope.addItem = function(title, url) {
       if (!/^(f|ht)tps?:\/\//i.test(url)) {
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
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        if (!/^(f|ht)tps?:\/\//i.test($scope.bookmarkUrlEdit)) {
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrlEdit;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceDS.upadeItem($scope.itemId);
    };
    
     // --- SET FIELD FORMS ---
    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});

// -------------------
// ---- Beverage -----
// -------------------
myApp.controller('beverageController', function($scope, ItemsServiceBV){
    $scope.category = "Beverage";
    $scope.bookmarks = ItemsServiceBV.getItems();
    $scope.cancelEditing();
    $scope.cancelCreating();

    $scope.addItem = function(title, url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
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
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        if (!/^(f|ht)tps?:\/\//i.test($scope.bookmarkUrlEdit)) {
            $scope.bookmarkUrl = "http://" + $scope.bookmarkUrlEdit;
        }
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceBV.upadeItem($scope.itemId);
    };
    
     // --- SET FIELD FORMS ---
    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});

// -------------------
// ------ Auth -------
// -------------------
myApp.controller("authCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var ref = new Firebase("https://<your-firebase>.firebaseio.com/");
    var auth = $firebaseAuth(ref);
    auth.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  }
]);
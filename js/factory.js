myApp.factory('ItemsService', function($firebase) {
    var ref = new Firebase("https://appcookbook.firebaseio.com/");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    var getItems = function() {
        return bookmarks;
    };
    
    
    var addItem = function(item) {
        bookmarks.$add(item);
    };
    
    var removeItem = function(id) {
        bookmarks.$remove(id);
    };
    
    var updateItem = function(id) {
        bookmarks.$save(id);
    }
    
    return {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        upadeItem: updateItem
    }
})

// -------------------
// ---- Breakfast ----
// -------------------
myApp.factory('ItemsServiceBS', function($firebase) {
    var ref = new Firebase("https://appcookbook.firebaseio.com/breakfast/");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    var getItems = function() {
        return bookmarks;
    };
    
    
    var addItem = function(item) {
        bookmarks.$add(item);
    };
    
    var removeItem = function(id) {
        bookmarks.$remove(id);
    };
    
    var updateItem = function(id) {
        bookmarks.$save(id);
    }
    
    return {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        upadeItem: updateItem
    }
})

// -------------------
// ------ Lunch ------
// -------------------
myApp.factory('ItemsServiceLU', function($firebase) {
    var ref = new Firebase("https://appcookbook.firebaseio.com/lunch/");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    var getItems = function() {
        return bookmarks;
    };
    
    
    var addItem = function(item) {
        bookmarks.$add(item);
    };
    
    var removeItem = function(id) {
        bookmarks.$remove(id);
    };
    
    var updateItem = function(id) {
        bookmarks.$save(id);
    }
    
    return {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        upadeItem: updateItem
    }
})

// -------------------
// ----- Dessert -----
// -------------------
myApp.factory('ItemsServiceDS', function($firebase) {
    var ref = new Firebase("https://appcookbook.firebaseio.com/dessert/");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    var getItems = function() {
        return bookmarks;
    };
    
    
    var addItem = function(item) {
        bookmarks.$add(item);
    };
    
    var removeItem = function(id) {
        bookmarks.$remove(id);
    };
    
    var updateItem = function(id) {
        bookmarks.$save(id);
    }
    
    return {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        upadeItem: updateItem
    }
})

// -------------------
// ---- Beverage -----
// -------------------
myApp.factory('ItemsServiceBV', function($firebase) {
    var ref = new Firebase("https://appcookbook.firebaseio.com/beverage/");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    var getItems = function() {
        return bookmarks;
    };
    
    
    var addItem = function(item) {
        bookmarks.$add(item);
    };
    
    var removeItem = function(id) {
        bookmarks.$remove(id);
    };
    
    var updateItem = function(id) {
        bookmarks.$save(id);
    }
    
    return {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        upadeItem: updateItem
    }
})
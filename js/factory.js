myApp.factory('ItemsService', function($firebase) {
    var ref = new Firebase("https://anagold.firebaseio.com/");
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

myApp.factory('ItemsServiceBS', function($firebase) {
    var ref = new Firebase("https://anagold.firebaseio.com/breakfast/");
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

myApp.factory('ItemsServiceLU', function($firebase) {
    var ref = new Firebase("https://anagold.firebaseio.com/lunch/");
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

myApp.factory('ItemsServiceDS', function($firebase) {
    var ref = new Firebase("https://anagold.firebaseio.com/dessert/");
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

myApp.factory('ItemsServiceBV', function($firebase) {
    var ref = new Firebase("https://anagold.firebaseio.com/beverage/");
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
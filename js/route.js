myApp.config(function($routeProvider) {
    $routeProvider
        .when( '/home', {
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        .when( '/breakfast', {
            templateUrl: 'pages/breakfast.html',
            controller: 'breakfastController'
        })
        .when( '/lunch', {
            templateUrl: 'pages/lunch.html',
            controller: 'lunchController'
        })
        .when( '/dessert', {
            templateUrl: 'pages/dessert.html',
            controller: 'dessertController'
        })
        .when( '/beverage', {
            templateUrl: 'pages/beverage.html',
            controller: 'beverageController'
        })
        .otherwise({
            redirectTo: '/home'
    });
});
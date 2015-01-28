myApp.config(function($routeProvider) {
    $routeProvider
        .when( '/breakfast', {
            templateUrl: 'pages/breakfast.html',
            controller: 'breakfastController'
        })
});
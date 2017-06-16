(function() {
    angular.module('GardenUI').config(function($routeProvider){
        $routeProvider

            .when('/', {
                templateUrl: 'templates/home.html'
            })

            .when('/plants', {
                templateUrl: 'templates/plants.html'
            })

            .when('/plants/:id', {
                templateUrl: 'templates/plant.html'
            })

            .when('/admin', {
                templateUrl: 'templates/admin.html'
            })

            .when('/404', {
                templateUrl: 'templates/404.html'
            })

            .otherwise ( { redirectTo: '/404' });

    });

})();
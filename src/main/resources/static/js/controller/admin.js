(function() {

    angular.module('GardenUI')

        .controller('AdminCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
            $scope.title = "Admin";

            var urlBase = "http://localhost:8080";
            $http.defaults.headers.post["Content-Type"] = "application/json";

            function getPlants() {
                $http.get(urlBase + '/plants').
                    success(function (data) {
                        $scope.plants = data._embedded.plants;
                    });
            };
         
            getPlants();

        }]);

})();

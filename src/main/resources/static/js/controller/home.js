(function() {

    angular.module('GardenUI')

        .controller('HomeCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
            $scope.title = "Home";

        }]);

})();

(function() {

    angular.module('GardenUI')

        .controller('AdminCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
            $scope.title = "Admin";

            var urlBase = "http://localhost:8080";
            $http.defaults.headers.post["Content-Type"] = "application/json";

            function getSpecies() {
                $http.get(urlBase + '/species')
                    .success(function(data) {
                        $scope.species = data._embedded.species;
                    })
                    .error(function(data) {
                        alert(data);
                    });
            };

            function getPhylums() {
                $http.get(urlBase + '/phylums')
                    .success(function(data) {
                        $scope.phylums = data._embedded.phylums;
                    })
                    .error(function(data) {
                        alert(data);
                    });
            };

            function getGenuses() {
                 $http.get(urlBase + '/genera')
                     .success(function(data) {
                         $scope.genuses = data._embedded.genera;
                     })
                     .error(function(data) {
                         alert(data);
                     });
            };

            function getOrders() {
                 $http.get(urlBase + '/orders')
                     .success(function(data) {
                         $scope.orders = data._embedded.orders;
                     })
                     .error(function(data) {
                         alert(data);
                     });
            };

            function getFamilies() {
                $http.get(urlBase + '/families')
                    .success(function(data) {
                        $scope.families = data._embedded.families;
                    })
                    .error(function(data) {
                        alert(data);
                    });
            };

            function getClasses() {
                $http.get(urlBase + '/classes')
                    .success(function(data) {
                        $scope.classes = data._embedded.classes;
                    })
                    .error(function(data) {
                        alert(data);
                    });
            };

            getSpecies();
            getClasses();
            getFamilies();
            getGenuses();
            getOrders();
            getPhylums();

            function saveObject(url, object, list) {
                $http.post(urlBase + url, object)
                    .success(function(data) {
                        object.id = data.id;
                        list.push(angular.copy(object));
                    })
                    .error(function(data) {
                        alert('Could not save object: ' + data.message);
                    });
            };

            $scope.saveSpec = function() {
                saveObject('/species', $scope.newSpec, $scope.species);
                delete $scope.newSpec;
            };

            $scope.saveGenus = function() {
                saveObject('/genera', $scope.newGenus, $scope.genuses);
                delete $scope.newGenus;
            };

            $scope.saveFamily = function() {
                saveObject('/families', $scope.newFamily, $scope.families);
                delete $scope.newFamily;
            };

            $scope.saveOrder = function() {
                saveObject('/orders', $scope.newOrder, $scope.orders);
                delete $scope.newOrder;
            };

            $scope.saveClass = function() {
                saveObject('/classes', $scope.newClass, $scope.classes);
                delete $scope.newClass;
            };

            $scope.savePhylum = function() {
                saveObject('/phylums', $scope.newPhylum, $scope.phylums);
                delete $scope.newPhylum;
            };
            
            function deleteObject(url, object, list) {
                $http.delete(urlBase + url + '/' + object.id)
                    .success(function(data) {
                        list.splice(list.indexOf(object), 1);
                    })
                    .error(function(data) {
                        alert('Could not delete object: ' + data.message);
                    });
            };
            
            $scope.deleteSpec = function(spec) {
                deleteObject('/species', spec, $scope.species);
            };

            $scope.deleteGenus = function(genus) {
                deleteObject('/genera', genus, $scope.genuses);
            };

            $scope.deleteFamily = function(family) {
                deleteObject('/families', family, $scope.families);
            };

            $scope.deleteOrder = function(order) {
                deleteObject('/orders', order, $scope.orders);
            };

            $scope.deleteClass = function(plantCLass) {
                deleteObject('/classes', plantCLass, $scope.classes);
            };

            $scope.deletePhylum = function(phylum) {
                deleteObject('/phylums', phylum, $scope.phylums);
            };

        }]);

})();

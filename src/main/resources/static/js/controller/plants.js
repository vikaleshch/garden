(function() {

    angular.module('GardenUI')

        .controller('PlantsCtrl', ['$scope', '$location', '$http', '$uibModal', function ($scope, $location, $http, $uibModal) {
            $scope.title = "Plants";

            var urlBase = "http://localhost:8080";
            $http.defaults.headers.post["Content-Type"] = "application/json";

            function getPlants() {
                $http.get(urlBase + '/plants')
                    .success(function (data) {
                        $scope.plants = data._embedded.plants;
                    })
                    .error(function(data) {
                        alert(data.message);
                    });
            };

            function getSpecies() {
                $http.get(urlBase + '/species')
                    .success(function(data) {
                        $scope.species = data._embedded.species;
                    })
                    .error(function(data) {
                        alert(data.message);
                    });
            };

            function getCards() {
                $http.get(urlBase + '/cards')
                    .success(function (data) {
                        $scope.cards = data._embedded.cards;
                    })
                    .error(function(data) {
                        alert(data.message);
                    });
            };

            getPlants();
            getCards();
            getSpecies();

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

            $scope.saveCard = function() {
                $scope.newPlant = $scope.newCard.plant;
                saveObject('/plants', $scope.newPlant, $scope.plants);
                $scope.newCard.plant.id = $scope.newPlant.id;
                saveObject('/cards', $scope.newCard, $scope.cards);
                delete $scope.newPlant;
                delete $scope.newCard;
                $('#newCardModal').modal('hide');
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

            $scope.deleteCard = function(card) {
                deleteObject('/cards', card, $scope.cards);
                deleteObject('/plants', card.plant, $scope.plants);
                $('#cardModal').modal('hide');
            };

            $scope.showCard = function(card) {
                $scope.currentCard = card;
                $('#cardModal').modal('show');
            }

        }]);

})();

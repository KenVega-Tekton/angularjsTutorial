// esto es un modulo sin dependencias de nombre myNinjaApp
let myNinjaApp = angular.module("myNinjaApp", ["ngRoute"]);

myNinjaApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "NinjaController2"
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "NinjaController2"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

myNinjaApp.controller("NinjaController2", [
  "$scope",
  "$http",
  function($scope, $http) {
    // debe ser function y no arrow function
    $scope.removeNinja = (ninja) => {
      let removedNinjaIndex = $scope.ninjas.indexOf(ninja);

      $scope.ninjas.splice(removedNinjaIndex, 1);
    };

    $scope.addNinja = () => {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true
      });

      $scope.newninja.name = "";
      $scope.newninja.belt = "";
      $scope.newninja.rate = "";
    };

    // $http.get("data/ninjas.json").success(function(data) {
    //   $scope.ninjas = data;
    // });

    $http.get("data/ninjas.json").then(function(response) {
      $scope.ninjas = response.data;
    });

    //console.log(angular.toJson($scope.ninjas));
  }
]);

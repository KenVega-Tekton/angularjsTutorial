// esto es un modulo sin dependencias de nombre myNinjaApp
let myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController2", [
  "$scope",
  ($scope) => {
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

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "Green",
        rate: 50,
        available: true
      },
      {
        name: "Crystal",
        belt: "Yellow",
        rate: 30,
        available: true
      },
      {
        name: "Ryu",
        belt: "Orange",
        rate: 20,
        available: false
      },
      {
        name: "Shaun",
        belt: "Black",
        rate: 10,
        available: true
      }
    ];
  }
]);

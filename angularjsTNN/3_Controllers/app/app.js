// esto es un modulo sin dependencias de nombre myNinjaApp
let myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.message = "hey you all";

    $scope.ninjas = ["yoshi", "cristel", "ryu", "shaun"];
  }
]);

myNinjaApp.controller("NinjaController2", [
  "$scope",
  ($scope) => {
    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "Green",
        rate: 50
      },
      {
        name: "Crystal",
        belt: "Yellow",
        rate: 30
      },
      {
        name: "Ryu",
        belt: "Orange",
        rate: 20
      },
      {
        name: "Shaun",
        belt: "Black",
        rate: 10
      }
    ];
  }
]);

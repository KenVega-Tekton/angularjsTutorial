angular
  .module("TodoList", ["LocalStorageModule"])
  .controller("TodoController", function($scope, localStorageService) {
    if (localStorageService.get("angular-todolist")) {
      $scope.activs = localStorageService.get("angular-todolist");
    } else {
      $scope.activs = [];
    }

    $scope.addActiv = function() {
      $scope.activs.push($scope.newActiv);
      $scope.newActiv = {};
      localStorageService.set("angular-todolist", $scope.activs);
    };

    $scope.clean = function() {
      $scope.activs = [];
      localStorageService.set("angular-todolist", $scope.activs);
    };
  });

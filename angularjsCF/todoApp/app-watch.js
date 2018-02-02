angular
  .module("TodoList", ["LocalStorageModule"])
  .controller("TodoController", function($scope, localStorageService) {
    if (localStorageService.get("angular-todolist")) {
      $scope.activs = localStorageService.get("angular-todolist");
    } else {
      $scope.activs = [];
    }

    $scope.$watchCollection("activs", function(newValue, oldValue) {
      localStorageService.set("angular-todolist", $scope.activs);
    });

    $scope.addActiv = function() {
      $scope.activs.push($scope.newActiv);
      $scope.newActiv = {};
    };

    $scope.clean = function() {
      $scope.activs = [];
    };
  });

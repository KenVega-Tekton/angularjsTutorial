angular
  .module("MiApp", [])

  .controller("MiControlador", [
    "$scope",
    function($scope) {
      $scope.name = "Javier Mendieta";
    }
  ]);

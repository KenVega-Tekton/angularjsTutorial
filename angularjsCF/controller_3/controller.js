angular.module("MiApp").controller("MiControlador", [
  "$scope",
  function($scope) {
    $scope.newComment = {};

    $scope.comments = [
      { username: "lorem123", comment: "comment123" },
      { username: "lorem321", comment: "comment321" }
    ];

    $scope.addNewComment = function() {
      $scope.comments.push($scope.newComment);
      $scope.newComment = {}; // if no reset is applied, there will be an error
    };
  }
]);

angular
  .module("MiApp", [])

  .controller("MiControlador", [
    "$scope",
    "$http",
    function($scope, $http) {
      $scope.posts = [];

      $http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(function(data) {
          $scope.posts = data.data;
          console.log($scope.posts);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  ]);

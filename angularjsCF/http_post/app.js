angular
  .module("MiApp", [])

  .controller("MiControlador", [
    "$scope",
    "$http",
    function($scope, $http) {
      $scope.newPost = {};

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

      $scope.addPost = function() {
        $http
          .post("http://jsonplaceholder.typicode.com/posts", {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
          })
          .then(function(data, status, headers, config) {
            console.log(data);
            $scope.newPost = {};
            $scope.posts.unshift({
              title: data.data.title,
              body: data.data.body
            });
          })
          .catch(function(data, status, headers, config) {});
      };
    }
  ]);

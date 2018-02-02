angular
  .module("mainModule", [])
  .filter("removeHtml", function() {
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, "");
    };
  })
  .controller("FilterController", function($scope) {
    $scope.mi_html = "<p>Hola Mundo</p>";
  });

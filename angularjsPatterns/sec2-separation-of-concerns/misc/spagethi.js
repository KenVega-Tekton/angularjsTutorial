//spagethi
function avengers($http, $log) {
  var vm = this;
  vm.avengers = [];

  function getAvengers() {
    return $http.get("/api/maa").then(
      function(data, status, headers, config) {
        vm.avengers = data.data[0].data.results;
        return vm.avengers;
      },
      function(error) {
        toastr.error(error, title);
        $log.error("Error: " + error);
      }
    );
  }
}

//ravioli
function avengers(avengersData) {
  var vm = this;
  vm.avengers = [];

  function getAvengers() {
    avengersData.getAvengers().then(function(data) {
      vm.avengers = data;
      return vm.avengers;
    });
  }
}

// dependencia en ravioli
angular
  .module("modularApp.avengers")
  .factory("avengers.dataservice", ["$http", "common", dataservice]);

function dataservice($http, common) {
  var service = {
    getAvengersCast: getAvengersCast,
    getAvengersCount: getAvengersCount,
    getAvengers: getAvengers
  };

  // aqui irian sus implementaciones

  return service;
}

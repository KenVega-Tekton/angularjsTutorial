angular
  .module("TodoList", ["LocalStorageModule"])
  .service("TodoService", function(localStorageService) {
    // se agrega toda la funcionalidad a un objeto

    this.key = "angular-todolist";

    // inicializa tareas que existen desde localStorage
    const todosListLocal = localStorageService.get(this.key);
    if (todosListLocal) {
      this.activities = todosListLocal;
    } else {
      this.activities = [];
    }

    this.updateLocalStorage = function() {
      localStorageService.set(this.key, this.activities);
    };

    this.add = function(newAct) {
      this.activities.push(newAct);
      this.updateLocalStorage();
    };

    this.clean = function() {
      this.activities = [];
      this.updateLocalStorage();
      return this.getAll();
    };

    this.getAll = function() {
      console.log("get all function");
      console.log(this.activities);
      return this.activities;
    };

    this.removeItem = function(item) {
      this.activities = this.activities.filter(function(activity) {
        return activity !== item;
      });
      this.updateLocalStorage();
      return this.getAll();
    };

    //y al final se devuelve el objeto
    return this;
  })
  .controller("TodoController", function($scope, TodoService) {
    $scope.activs = TodoService.getAll();

    $scope.addActiv = function() {
      TodoService.add($scope.newActiv);
      //   no entiendo como afecta a $scope.activs sin declarar que lo haga en algun lado
      $scope.newActiv = {};
    };

    $scope.removeActv = function(item) {
      $scope.activs = TodoService.removeItem(item);
    };

    $scope.clean = function() {
      $scope.activs = TodoService.clean();
    };
  });

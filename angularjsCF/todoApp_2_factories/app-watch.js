angular
  .module("TodoList", ["LocalStorageModule"])
  .factory("TodoService", function(localStorageService) {
    // se agrega toda la funcionalidad a un objeto
    let todoService = {};

    todoService.key = "angular-todolist";

    // inicializa tareas que existen desde localStorage
    const todosListLocal = localStorageService.get(todoService.key);
    if (todosListLocal) {
      todoService.activities = todosListLocal;
    } else {
      todoService.activities = [];
    }

    todoService.updateLocalStorage = function() {
      localStorageService.set(todoService.key, todoService.activities);
    };

    todoService.add = function(newAct) {
      todoService.activities.push(newAct);
      todoService.updateLocalStorage();
    };

    todoService.clean = function() {
      todoService.activities = [];
      todoService.updateLocalStorage();
      return todoService.getAll();
    };

    todoService.getAll = function() {
      console.log("get all function");
      console.log(todoService.activities);
      return todoService.activities;
    };

    todoService.removeItem = function(item) {
      todoService.activities = todoService.activities.filter(function(
        activity
      ) {
        return activity !== item;
      });
      todoService.updateLocalStorage();
      return todoService.getAll();
    };

    //y al final se devuelve el objeto
    return todoService;
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

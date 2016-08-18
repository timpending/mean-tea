var app = angular.module('meanTea', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/inventory.html',
        controller: 'InventoryController'
      })
      .otherwise('/')
    $locationProvider.html5Mode(true);
  })

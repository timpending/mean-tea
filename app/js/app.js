var app = angular.module('meanTea', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/inventory.html',
        controller: 'InventoryController'
      })
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckoutController'
      })
      .otherwise('/')
    $locationProvider.html5Mode(true);
  })

angular.module('app', ['ngMaterial', 'ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'mainController',
        controllerAs: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

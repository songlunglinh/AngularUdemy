var app = angular.module('myApp',['ngRoute'])
.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'show'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

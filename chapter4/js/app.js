var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider.when('/',{
    controller: 'indexCtrl',
    templateUrl: 'assets/partials/index.html'
  }).when('/add-employee',{
    controller: 'addCtrl',
    templateUrl: 'assets/partials/add.html'
  });

});

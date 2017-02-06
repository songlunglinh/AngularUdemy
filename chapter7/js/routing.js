app.config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider.when( '/' , {
			controller: 'IndexCtrl',
			templateUrl: 'partials/page_start.html'
		} )
		.when( '/add_employee', {
			controller: 'AddCtrl',
			templateUrl: 'partials/add_employee.html'
		} )
		.when( '/employee/:id', {
			controller: 'EmployeeCtrl',
			templateUrl: 'partials/employee.html'
		} )
		.when( '/gravtar/:id', {
			controller: 'GravtarCtrl',
			templateUrl: 'partials/gravtar.html'
		} )
		.otherwise({
			redirectTo: "/"
		});
});

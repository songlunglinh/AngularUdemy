(function(){
  app.controller( 'IndexCtrl', [ '$scope', '$rootScope', 'employeeFactory', function( $scope, $rootScope, employeeFactory ) {

		$scope.pageHeader = "All Employees";
		$rootScope.navPath = "partials/layout/nav.html";

		$scope.employees = employeeFactory.get();

		$scope.templateName = $rootScope.navPath;

		$scope.searchText = $rootScope.searchText;

		//-- schecking if serachText is changed anywhere the update its value
		$scope.$watch(function() {
		  return $rootScope.searchText;
		}, function() {
		  $scope.searchText = $rootScope.searchText;
		}, true);

		//-- reomve the contacts form directory
		$scope.removeUser = function( id ) {
			employeeFactory.remove( id );
		};


	} ] );
  app.controller( 'AddCtrl', [ '$scope', '$rootScope', 'employeeFactory', function( $scope, $rootScope, employeeFactory ) {

		$scope.pageHeader = "Add Employees";
		$scope.templateName = $rootScope.navPath;
		$scope.onSubmit = function( obj ) {
			employeeFactory.add( obj );
      console.log(obj);
			$scope.added = true;
			$scope.employees = null;
		};

	} ] );
  app.controller( 'EmployeeCtrl', [ '$scope', '$rootScope', '$routeParams', function( $scope, $rootScope, $routeParams ) {

		$scope.pageHeader = "View Employee";
		$scope.templateName = $rootScope.navPath;

		console.log( $routeParams );
		console.log( "The user id is " + $routeParams.id );
	} ] );

	app.controller( 'GravtarCtrl', [ '$scope', '$rootScope', '$routeParams', 'employeeFactory', function( $scope, $rootScope, $routeParams, employeeFactory ) {

		$scope.pageHeader = "Gravtar";
		$scope.templateName = $rootScope.navPath;

		$scope.user = employeeFactory.find( $routeParams.id );

	} ] );

  app.controller( 'NavigationCtrl', [ '$scope', '$rootScope', '$location', function( $scope, $rootScope, $location ) {
		$scope.templateName = "partials/layout/nav.html";
		$scope.startSearch = function( text ) {
			$location.path( '/' );
			$rootScope.searchText = text;
		};
		$scope.pageClass = function(path){
			return (path == $location.path()) ? 'active' : '';
		};

		console.log( "included :: ",$scope.templateName );
	} ] );
}());

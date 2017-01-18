var app = angular.module("minmax",[]);

app.controller("MinMaxCtrl",['$scope',function($scope){
	console.log('Huynh Ngoc Tu');

	$scope.formModel = {};

	$scope.onSubmit = function() {
		console.log("Hey i'm submitted!");
		console.log($scope.formModel);
	}
}]);

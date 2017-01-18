var app = angular.module("minmax",[]);

app.controller("MinMaxCtrl",['$scope','$http',function($scope,$http){
	$scope.forModel = {};

	$scope.onSubmit = function(valid) {
		if(valid) {
			console.log("Hey i'm submit");
			console.log($scope.forModel);
		} else {
			console.log("Invalid Form");
		}
	}
}]);

var app = angular.module("minmax",['jcs-autoValidate']);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessage){
		errorMessage['tooYoung'] = 'You must be at least {0} years old to use this site';
		errorMessage['tooOld'] = 'You must be max {0} years old to use this site';
		errorMessage['badUsername'] = 'Username can only contain numbers and letters';
	});
});

app.controller("MinMaxCtrl",['$scope','$http',function($scope,$http){
	$scope.forModel = {};

	$scope.onSubmit = function() {
			console.log("Hey i'm submit");
			console.log($scope.formModel);
	}
}]);

var StudentsController = function($scope){
	
	$scope.student = {};
	
	$scope.students = [{
		name: 'Thuan Pham',
		age: 23
	},{
		name: 'Tu Huynh',
		age: 21
	}];
};
StudentsController.$inject = ['$scope'];

app.controller('StudentsController', StudentsController);

app.controller('employeeController',['$scope','employeeService',function($scope,employeeService){
  $scope.employees = employeeService;
}]);

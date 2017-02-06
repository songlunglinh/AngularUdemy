app.controller('searchMain',['$scope','employeeService',function($scope,employeeService){
  $scope.employees = employeeService;
}]);

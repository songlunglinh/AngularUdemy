app.controller('MainCtrl',['$scope','SharedDataService',function($scope,SharedDataService){
  $scope.students = SharedDataService;
}]);

app.controller('ShowCtrl',['$scope','SharedDataService',function($scope,SharedDataService){
  $scope.students = SharedDataService;
}]);

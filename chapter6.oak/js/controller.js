app.controller('indexCtrl',['$scope','employeeFactory','$routeParams',function($scope,employeeFactory,$routeParams){
  $scope.employees = employeeFactory.get();
  $scope.e = {};
  $scope.submit = function(){
    console.log('show');
    employeeFactory.create($scope.e);
    $scope.e = null;
    $scope.added = true;
  };
  $scope.test = function() {
    alert('angular demo');
  }
  $scope.e = employeeFactory.find($routeParams.id);
}]);

app.controller('addCtrl',['$scope',function($scope){

}]);

app.controller('aboutCtrl',['$scope',function($scope){

}]);

app.controller('apCtl',['$scope','$location',function($scope,$location){
  $scope.startSearch = function() {
    $location.path('/');
  };
  $scope.pageClass = function(path) {
    return (path == $location.path()) ? 'active' : '';
  };
}]);

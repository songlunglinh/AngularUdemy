(function(){
  var app = angular.module('directivesModule',[]);

  var StudentsController = function($scope) {
    var counter = 0;

    $scope.student = {
      name: 'Thuan Pham',
      age: 23
    };

    $scope.students = [{
      name: 'Thuan Pham',
      age: 23
    },{
      name: 'Tu Huynh',
      age: 22
    },
    {
      name: 'Nhan Dinh',
      age: 22
    }
  ];
  }

  StudentsController.$inject = ['$scope'];

  app.controller('StudentsController', StudentsController);
}());

var app = angular.module('codecraft',[]);

app.controller('PersonController', function($scope){

  $scope.selectedIndex = null;
  $scope.selectedPerson = null;
  $scope.selectPerson = function(person, index) {

    $scope.selectedIndex = index;
    $scope.selectedPerson = person;

  }

  $scope.persons = [
    {
      name: 'Thuan Pham',
      email: 'pvthuan@gmail.com',
      birthday: '07-07-1993',
      phone: '0907656865',
      address: 'Phu Nhuan Ho Chi Minh'
    },
    {
      name: 'Tu Huynh',
      email: 'hntu@gmail.com',
      birthday: '10-10-1993',
      phone: '0975654445',
      address: 'Hau Giang'
    }
  ];
});

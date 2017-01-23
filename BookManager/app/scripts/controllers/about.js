'use strict';

/**
 * @ngdoc function
 * @name bookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookApp
 */
angular.module('bookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.about = {
      name: "Thuan Pham",
      age: 24,
      email: "pvthuan0702@gmail.com",
      website: "songlunglinh.net",
      fb: "facebook.com/core0dual",
      skill: "Java, Linux, UI Basic, Spring Framework"
    };
  });

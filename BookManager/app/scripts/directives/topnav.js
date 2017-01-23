'use strict';

/**
 * @ngdoc directive
 * @name bookApp.directive:topNav
 * @description
 * # topNav
 */
angular.module('bookApp')
  .directive('topNav', function () {
    return {
      templateUrl: 'views/topNav/top.nav.html'
    };
  });

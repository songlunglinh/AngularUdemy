(function(){
  var app = angular.module('directivesModule');
  app.directive('isolateScopeWithObject',function(){
    return {
      scope: {
        datasource: '='
      },
      template: 'Name: {{datasource.name}} Age: {{datasource.age}}' +
      '<br /><button ng-click="datasource.name=\'Something\'">' +
      'Change</button>'
    };
  });
}());

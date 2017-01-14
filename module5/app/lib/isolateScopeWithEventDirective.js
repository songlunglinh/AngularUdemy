(function(){
  var app = angular.module('directivesModule');
  app.directive('isolateScopeWithEvent',function(){
    return {
      scope: {
        datasource: '=',
        action: '&'
      },
      template: 'Name: {{datasource.name}} Age: {{datasource.age}}' +
      '<br /><button ng-click="action()">' +
      'Change</button>'
    };
  });
}());

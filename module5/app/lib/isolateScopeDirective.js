(function(){
  var app = angular.module('directivesModule');
  app.directive('isolateScope',function(){
    return {
      template: 'Name: {{student.name}} Age: {{student.age}}'
    };
  });
}());

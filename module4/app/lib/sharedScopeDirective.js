(function(){
  var app = angular.module('directivesModule');
  app.directive('sharedScope',function(){
    return {
      template: 'Name: {{student.name}} Age: {{student.age}}'
    };
  });
}());

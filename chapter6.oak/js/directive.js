app.directive('editable',function(){
  return {
    restrict: 'AE',
    templateUrl: '/assets/partials/editable.html',
    scope: {
      value: '=editable',
      field: '@fieldType'
    },
    controller: function($scope) {
      
    }
 };
});

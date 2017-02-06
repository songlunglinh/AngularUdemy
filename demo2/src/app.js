(function(){
  var app = angular
      .module('starterApp', ['ngMaterial'])
      .run(function($log){
        $log.debug("startApp running ");
      });
})();

(function(){
  'use strict';

  /**
   * Students DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  angular.module('students').service('studentService', ['$q', StudentService]);

  function StudentService($q){
    var students = [
      {
        name: 'Thuan Pham',
        avatar: 'svg-1',
        content: 'This is message for Thuan Pham'
      },
      {
        name: 'Tu Huynh',
        avatar: 'svg-2',
        content: 'This is message for Tu Huynh'
      },
      {
        name: 'Bich Ngoc',
        avatar: 'svg-3',
        content: "This is message for Bich Ngoc"
      }
    ];

    // Promise-based API
    return {
      loadAllStudents : function() {
        // Simulate async nature of real remote calls
        return $q.when(students);
      }
    };
  }
})();

(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('assignTeachersService', cshReqServiceFn);

    function assignTeachersService () {
      var teachers = [];
      var publicApi = {
        assignTeachers : _assignTeachers,
        getTeachers : _getTeachers,
        deleteTeachers : _deleteTeachers
      };
      return publicApi;

      function _assignTeachers (pidteacher pidproject) {
        console.log('inside Add Project')
      }

      function _getTeachers () {
        console.log('inside Get Projects')
      }

      function _deleteTeachers (pidteacher pidproject) {
        console.log('inside Delete Project')
      }
    }
})();
(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('assignStudentsService', assignTeachersService);

    function assignTeachersService (studentService) {
      var teachers = [];
      var localStudents = studentService.getStudent();
      var publicApi = {
        assignStudents : _assignStudents,
        getassignedStudents : _getassignedStudents,
        deleteassignedStudents : _deleteassignedStudents
      };
      return publicApi;

      function _assignStudents (pIdstudent, pIdproject) {
        console.log('inside Add Project')
      }

      function _getassignedStudents (pIdproject) {
        console.log('inside Get Projects')
      }

      function _deleteassignedStudents (pIdstudent, pIdproject) {
        console.log('inside Delete Project')
      }
    }
})();
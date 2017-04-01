(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('assignTeachersService', assignTeachersService);

    function assignTeachersService () {
      var teachers = [];
      // var localStudents = studentService.getStudent();
      var publicApi = {
        assignTeachers : _assignTeachers,
        getassignedTeachers : _getassignedTeachers,
        deleteassignedStudents : _deleteassignedStudents
      };
      return publicApi;

      function _assignTeachers (pIdTeacher, pIdproject) {
        console.log('inside Add Project')
      }

      function _getassignedTeachers (pIdproject) {
        console.log('inside Get Projects')
      }

      function _deleteassignedStudents (pIdTeacher, pIdproject) {
        console.log('inside Delete Project')
      }
    }
})();
(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('assignStudentsController', assignStudentsCtrl)
    .filter('startFrom', pagination);

    function assignStudentsCtrl ($scope, assignStudentsService, studentService) {
      var assignStudentsCtrl = this;
      assignStudentsCtrl.modalStudent = false;
      function init(){ 
        var students = studentService.getStudent();
        assignStudentsCtrl.students = [];
        for (var i=0; i < students.length; i++) {
          if (students[i].statusId == 1 || students[i].statusId == 2) {
            assignStudentsCtrl.students.push(students[i]);
          } else {
            console.log('dont do this');  
          }
        }
      }
      init();
      assignStudentsCtrl.currentPage = 0;
      assignStudentsCtrl.pageSize = 1;
      assignStudentsCtrl.numberOfPages=function(){
          return Math.ceil(assignStudentsCtrl.students.length/assignStudentsCtrl.pageSize);                
      }

      assignStudentsCtrl.openModal = function (_param) {
        assignStudentsCtrl.modalStudent = true;
      }
      assignStudentsCtrl.closeModal = function (_param) {
        assignStudentsCtrl.modalStudent = false;
      }
      assignStudentsCtrl.assignStudent = function (_param) {

      }
    }

    function pagination () {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
    }
})();
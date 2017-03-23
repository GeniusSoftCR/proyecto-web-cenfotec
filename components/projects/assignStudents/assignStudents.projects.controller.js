(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('assignStudentsController', assignStudentsCtrl)
    .filter('startFrom', pagination);

    function assignStudentsCtrl ($scope, assignStudentsService, studentService, watchProjectService, cshReqService, $stateParams) {
      var assignStudentsCtrl = this;
      assignStudentsCtrl.modalStudent = false;
      assignStudentsCtrl.projectId = $stateParams.proyectoId;
      function init(){ 

        var mainProject = watchProjectService.getProjectbyId(assignStudentsCtrl.projectId);
        var students = studentService.getStudent();
        var assignedStudents = mainProject.students;
        var studentsData = [];
        assignStudentsCtrl.students = [];
        assignStudentsCtrl.studentsData = studentsData;
        for (var i=0; i < assignedStudents.length; i++) {
          for (var b=0; b < students.length; b++) {
            if (assignedStudents[i] == students[b].id) {
              assignStudentsCtrl.studentsData.push(students[b]);
            }
          }
        }
        console.log(assignStudentsCtrl.studentsData);
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
      assignStudentsCtrl.assignStudent = function () {
        var studentSelected = assignStudentsCtrl.assign.studentChecked;
        var project = watchProjectService.getProjectbyId(assignStudentsCtrl.projectId);
        project.students.push(studentSelected);
        var updateProjectRequest ={
          name: project.name,
          id : assignStudentsCtrl.projectId,
          state_key : project.state_key,
          clientId: project.clientId,
          professor: project.professor,
          assitant: project.assitant,
          executiveSummary : project.executiveSummary,
          objective: project.objective,
          images:project.images,
          funds : project.fundsToMakeProject,
          students: project.students,
          files :project.files
        }
        cshReqService.putProject(assignStudentsCtrl.projectId, updateProjectRequest);
        init();
      }

      assignStudentsCtrl.remove = function (index) {
        console.log(index);
        var project = watchProjectService.getProjectbyId(assignStudentsCtrl.projectId);
        project.students.splice(index, 1);
        console.log(project);
        cshReqService.putProject(assignStudentsCtrl.projectId, project);
        init();
      }
    }

    function pagination () {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
    }
})();
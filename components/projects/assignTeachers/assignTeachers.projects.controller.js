(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersCtrl)
    .filter('startFrom', pagination);

    function assignTeachersCtrl ($scope, assignTeachersService, watchProjectService, cshReqService, $stateParams, userProfessorService) {
      var assignTeachersCtrl = this;
      assignTeachersCtrl.modal = false;
      assignTeachersCtrl.projectId = $stateParams.proyectoId;
      function init(){ 

        var mainProject = watchProjectService.getProjectbyId(assignTeachersCtrl.projectId);
        console.log(mainProject);
        var teachers = userProfessorService.getProfessors();
        if (mainProject.assitant == null) {
            mainProject.assitant = [];
        }
        var assignedTeachers = mainProject.assitant;
        var teachersData = [];
        assignTeachersCtrl.teachers = [];
        assignTeachersCtrl.teachersData = teachersData;

        for (var i=0; i < assignedTeachers.length; i++) {
          for (var b=0; b < teachers.length; b++) {
            if (assignedTeachers[i] == teachers[b].id) {
              assignTeachersCtrl.teachersData.push(teachers[b]);
            }
          }
        }
        for (var i=0; i < teachers.length; i++) {
          if (teachers[i].availableForProyects == "Si") {
            assignTeachersCtrl.teachers.push(teachers[i]);
          } else {
            console.log('dont do this');  
          }
        }
      }
      init();
      assignTeachersCtrl.currentPage = 0;
      assignTeachersCtrl.pageSize = 1;
      assignTeachersCtrl.numberOfPages=function(){
          return Math.ceil(assignTeachersCtrl.teachers.length/assignTeachersCtrl.pageSize);                
      }

      assignTeachersCtrl.openModal = function (_param) {
        assignTeachersCtrl.modal = true;
      }
      assignTeachersCtrl.closeModal = function (_param) {
        assignTeachersCtrl.modal = false;
      }
      assignTeachersCtrl.assignTeacher = function () {
        var teacherSelected = assignTeachersCtrl.assign.teacherChecked;
        var project = watchProjectService.getProjectbyId(assignTeachersCtrl.projectId);
        if (project.assitant == null) {
            project.assitant = [];
        }
        project.assitant.push(teacherSelected);
        var updateProjectRequest ={
          name: project.name,
          id : assignTeachersCtrl.projectId,
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
        cshReqService.putProject(assignTeachersCtrl.projectId, updateProjectRequest);
        init();
      }

    //   assignStudentsCtrl.remove = function (index) {
    //     console.log(index);
    //     var project = watchProjectService.getProjectbyId(assignStudentsCtrl.projectId);
    //     project.students.splice(index, 1);
    //     console.log(project);
    //     cshReqService.putProject(assignStudentsCtrl.projectId, project);
    //     init();
    //   }
    }

    function pagination () {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
    }
})();
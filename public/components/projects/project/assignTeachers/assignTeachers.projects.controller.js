(function(){
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersCtrl)
    .filter('startFrom', pagination);

    function assignTeachersCtrl ($scope, assignTeachersService, watchProjectService, cshReqService, $stateParams, userProfessorService) {
      var vm = this;
      vm.modal = false;
      //guarda el id del proyecto que viene por parámetro
      vm.projectId = $stateParams.proyectoId;
      function init(){
        //trae el proyecto actual
        var mainProject = watchProjectService.getProjectbyId(vm.projectId);
        //trae lista de profesores
        var teachers = userProfessorService.getProfessors();

        if (mainProject.assitant == null) {
            mainProject.assitant = [];
        }
        var assignedTeachers = mainProject.assitant;
        vm.teachers = [];
        vm.teachersData = [];

        for (var i=0; i < assignedTeachers.length; i++) {
          for (var b=0; b < teachers.length; b++) {
            if (assignedTeachers[i] == teachers[b].id) {
              vm.teachersData.push(teachers[b]);
            }
          }
        }
        for (var i=0; i < teachers.length; i++) {
          if (teachers[i].availableForProyects == "Si") {
            vm.teachers.push(teachers[i]);
          } else {
            console.log('dont do this');  
          }
        }
      }//FIN DEL INIT
      init();
      vm.currentPage = 0;
      vm.pageSize = 1;
      vm.numberOfPages=function(){
          return Math.ceil(vm.teachers.length/vm.pageSize);                
      }
      
      vm.assignTeacher = function () {
        var teacherSelected = vm.assign.teacherChecked;
        var project = watchProjectService.getProjectbyId(vm.projectId);
        if (project.assitant == null) {
            project.assitant = [];
        }
        project.assitant.push(teacherSelected);
        var updateProjectRequest ={
          name: project.name,
          id : vm.projectId,
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
        cshReqService.putProject(vm.projectId, updateProjectRequest);
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
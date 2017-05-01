(function(){
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersController)
    .filter('startFrom', pagination);

    assignTeachersController.$inject = ['$q','$stateParams','projectService'];

    function assignTeachersController ($q, $stateParams, projectService) {
      var vm = this;
      vm.project = {};    //proyecto actual
      vm.addPro=false;    //btn agregar prof.encargado
      vm.addAsi=false;    //btn agregar prof.asistente
      vm.delPro=false;    //btn borrar prof.encargado
      vm.delAsi=false;    //btn borrar prof.asistente


      //trae el proyecto actual
      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
          vm.project=res.data[0];
          init();
      });


      function init() {
        if(vm.project.professor==null || vm.project.professor==undefined){
          vm.addPro=true;
          vm.delPro=false;
        }else{
          vm.addPro=false;
          vm.delPro=true;
        }
        if(vm.project.assistant==null || vm.project.assistant==undefined){
          vm.addAsi=true;
          vm.delAsi=false;
        }else{
          vm.addAsi=false;
          vm.delAsi=true;
        }
      }

      //var mainProject = watchProjectService.getProjectbyId(vm.projectId);
      //trae lista de profesores
      //var teachers = userProfessorService.getProfessors();
      //disponibilidad para proyectos

      vm.currentPage = 0;
      vm.pageSize = 1;
      vm.numberOfPages=function(){
          return Math.ceil(vm.teachers.length/vm.pageSize);                
      }
      
      // vm.assignTeacher = function () {
      //   var teacherSelected = vm.assign.teacherChecked;
      //   var project = watchProjectService.getProjectbyId(vm.projectId);
      //   if (project.assitant == null) {
      //       project.assitant = [];
      //   }
      //   project.assitant.push(teacherSelected);
      //   var updateProjectRequest ={
      //     name: project.name,
      //     id : vm.projectId,
      //     state_key : project.state_key,
      //     clientId: project.clientId,
      //     professor: project.professor,
      //     assitant: project.assitant,
      //     executiveSummary : project.executiveSummary,
      //     objective: project.objective,
      //     images:project.images,
      //     funds : project.fundsToMakeProject,
      //     students: project.students,
      //     files :project.files
      //   }
      //   cshReqService.putProject(vm.projectId, updateProjectRequest);
      // }
    }

    function pagination () {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
    }
})();
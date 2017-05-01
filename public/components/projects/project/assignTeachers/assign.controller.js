(function(){
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersController)
    .filter('startFrom'/*, pagination*/);

    assignTeachersController.$inject = ['$q','$stateParams','projectService', 'userService'];

    function assignTeachersController ($q, $stateParams, projectService, userService) {
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
      //trae el profesor encargado
      vm.fetchProfessor= function(){
        userService.getUsers({idNum:vm.project.professor}).then(function (res) {
            vm.professor=res.data[0];
        });
      }
      //trae el profesor asistente
      vm.fetchAssistant= function(){
        userService.getUsers({idNum:vm.project.assistant}).then(function (res) {
            vm.assistant=res.data[0];
        });
      }
      //trae los profesores
      vm.fetchTeachers= function(){
        userService.getUsers({role:"professor"}).then(function (res) {
            vm.teachers=res.data;
            console.log(vm.teachers.idNum);
        });
      }
      //funcionalidad al abrir el modal
      vm.viewRequest= function(kind){
        vm.fetchTeachers();
      }
      //eliminar el profesor encargado
      vm.delTeacher= function(project,kind){
        if(kind==1){
          project.professor=null;
          vm.professor.name="";
          vm.professor.surname="";
          vm.professor.secondSurname="";
        }else if(kind==2){
          project.assistant=null;
          vm.assistant.name="";
          vm.assistant.surname="";
          vm.assistant.secondSurname="";
        }
        projectService.updateProject(project).then(function(res){
          console.log("Profesor eliminado");
        });
        init();
      }
      //eliminar el profesor encargado
      vm.addTeacher= function(project,kind){
        if(kind==1){
          project.professor=null;
          vm.professor.name="";
          vm.professor.surname="";
          vm.professor.secondSurname="";
        }else if(kind==2){
          project.assistant=null;
          vm.assistant.name="";
          vm.assistant.surname="";
          vm.assistant.secondSurname="";
        }
        projectService.updateProject(project).then(function(res){
          console.log("Profesor eliminado");
        });
        init();
      }

      function init() {
        if(vm.project.professor==null || vm.project.professor==undefined){
          vm.addPro=true;
          vm.delPro=false;
        }else{
          vm.addPro=false;
          vm.delPro=true;
          vm.fetchProfessor();
        }
        if(vm.project.assistant==null || vm.project.assistant==undefined){
          vm.addAsi=true;
          vm.delAsi=false;
        }else{
          vm.addAsi=false;
          vm.delAsi=true;
          vm.fetchAssistant();
        }
      }


      //var mainProject = watchProjectService.getProjectbyId(vm.projectId);
      //trae lista de profesores
      //var teachers = userProfessorService.getProfessors();
      //disponibilidad para proyectos

      // vm.currentPage = 0;
      // vm.pageSize = 1;
      // vm.numberOfPages=function(){
      //     return Math.ceil(vm.teachers.length/vm.pageSize);                
      // }
      
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

    // function pagination () {
    //   return function(input, start) {
    //       start = +start; //parse to int
    //       return input.slice(start);
    //   }
    // }
})();
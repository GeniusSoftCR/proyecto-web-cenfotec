(function(){
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersController);

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
        vm.retro=false;
      }
      //funcionalidad al abrir el modal
      vm.viewRequest= function(kind){
        vm.fetchTeachers();
        vm.kind=kind;
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
      vm.addTeacher= function(project,kind,teacher){
        if(kind==1){
          project.professor=teacher;
        }else if(kind==2){
          project.assistant=teacher;
        }
        projectService.updateProject(project).then(function(res){
          console.log("Profesor agregado");
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

    }

})();
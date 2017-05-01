(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectAnotationsController', projectAnotationsController);

    projectAnotationsController.$inject = ['$q','$stateParams','$timeout','projectService','AuthService'];

    function projectAnotationsController ($q, $stateParams,$timeout, projectService, AuthService) {
      var vm = this;
      vm.project = {};
      vm.user = AuthService.getAuthUser();
      //vm.anotation = {};


      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        vm.project=res.data[0];
        init();
      });    

      function init(){
        vm.anotations = vm.project.anotations;
      }

    
      vm.deleteAnotation= function(anotation_id){
       init();


      /*  angular.forEach(vm.project.anotations, deleteAnotation(value, key));*/

      angular.forEach(vm.project.anotations, function(anotation, key){
      

      if (anotation._id === anotation_id){
        console.log(key);
        console.log(vm.project.anotations[key]);

        vm.project.anotations.splice(key,1);
        }
      });

        projectService.updateProject(vm.project).then(function(res){
        console.log("Anotación eliminada");
        });

        $('#retroMessge-Modal').modal('show');
        vm.msg="Anotación eliminada del proyecto"
        
        init();
      }


      vm.save= function () {
        var newAnotation = {
          tittle : vm.tittle,
          description : vm.description,
          author: vm.user._id
        };

        vm.project.anotations.push(newAnotation);

        console.log(newAnotation);
        //envia el usuario al user.service
        projectService.updateProject(vm.project).then(function(res){
      
        });

        $('#annotation-Modal').modal('hide');
        $('#retroMessge-Modal').modal('show');
        vm.msg="Anotacion agregada correctamente"

          vm.modalAnotation = false;
          vm.tittle = null;
          vm.description = null;
      };


 /*   vm.deleteAnotation= function(project){

          project.anotation=[];
          vm.anotation.tittle="";
          vm.anotation.description="";
          vm.anotation.secondSurname="";

        projectService.updateProject(project).then(function(res){
          console.log("Profesor eliminado");
        });
        $('#retroMessage-Modal').modal('show');
        vm.msg="Anotacion eliminada"
        init();
      }*/

    } 
})();

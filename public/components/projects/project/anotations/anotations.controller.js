(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectAnotationsController', projectAnotationsController);

    projectAnotationsController.$inject = ['$q','$stateParams','$timeout','projectService','AuthService'];

    function projectAnotationsController ($q, $stateParams,$timeout, projectService, AuthService) {
      var vm = this;
      var project = {};
      vm.user = AuthService.getAuthUser();
      vm.project = {};

      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        project=res.data[0];
        init();
      });    

      function init(){
        vm.anotations = vm.project.anotations;
        vm.project = project;
      };

     /* function fetch(){
        
      };*/

      vm.deleteAnotation= function(anotation_id){
        var project = vm.project;

        angular.forEach(project.anotations, function(anotation, key){
          console.log(anotation._id === anotation_id);
          if (anotation._id === anotation_id){


            project.anotations.splice(key,1);
          }
        });

        console.log(project.anotations);
        projectService.updateProject(project).then(function(res){
        console.log("Anotación eliminada");

        vm.project = project;

        });

        $('#retroMessge-Modal').modal('show');
        vm.msg="Anotación eliminada del proyecto"
      };


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
            if(res.data){
            }
        });

        vm.tittle = null;
        vm.description = null;

        $('#anotation-Modal').modal('hide');
        $('#retroMessge-Modal').modal('show');
        vm.msg="Anotacion agregada correctamente"

      };

      vm.modal = {
        open: function(anotation) {
          console.log(anotation);
          vm.modal.title = anotation.tittle;
          vm.modal.body = anotation.description;
          console.log(vm.modal);

        }
      };

    } 
})();

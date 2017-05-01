(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectAnotationsController', projectAnotationsController);

    projectAnotationsController.$inject = ['$q','$stateParams','$timeout','projectService','AuthService'];

    function projectAnotationsController ($q, $stateParams,$timeout, projectService, AuthService) {
      var vm = this;
      vm.user = AuthService.getAuthUser();
      vm.project = {};

      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        vm.project=res.data[0];
        init();
      });    

      function init(){
        vm.anotations = vm.project.anotations;
      };

      vm.showAnotation=


      vm.deleteAnotation= function(anotation_id){
       init();

        angular.forEach(vm.project.anotations, function(anotation, key){

        if (anotation._id === anotation_id){
          console.log(key);
          console.log(vm.project.anotations[key]);

          vm.project.anotations.splice(key,1);
          }
        })

        projectService.updateProject(vm.project).then(function(res){
        console.log("Anotación eliminada");
        });

        $('#retroMessge-Modal').modal('show');
        vm.msg="Anotación eliminada del proyecto"
        
        init();
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

        console.log(vm.savedAnotation);

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

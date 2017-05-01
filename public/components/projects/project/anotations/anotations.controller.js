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
        console.log(vm.project.name, vm.user.name);
        vm.anotations = vm.project.anotations;
      }
      
     /* vm.modalAnotation = false;
      vm.extend = false;
      
      vm.showModal = function () {
        vm.modalAnotation = true;
      }
      vm.closeModal = function () {
        vm.modalAnotation = false;
      }

      vm.activeMenuIndex;
      vm.showSubmenu = function (item) {
        if(vm.activeParentIndex == item){
            vm.activeParentIndex = "";
        } else {
            vm.activeParentIndex = item;
        }
      }
      vm.isShowing = function(index) {
          return vm.activeParentIndex === index;
      };*/
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
          vm.modalAnotation = false;
          vm.tittle = null;
          vm.description = null;
      };




    } 
})();

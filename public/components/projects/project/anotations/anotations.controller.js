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

      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        vm.project=res.data[0];
        init();
      });    

      function init(){
        console.log(vm.project.name, vm.user.name);
        vm.anotations = projectService.getAnotations();
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
          id : 1,
          projectId : vm.project.name,
          name : vm.name,
          description : vm.description,
          iduserCreate: vm.user.name
        }


         console.log(newAnotation);
        //envia el usuario al user.service
        projectService.addAnotation(newAnotation).then(function(res){
            console.log(res);
            vm.anotation = {};
            vm.modal.title = 'Anotación agregada';
            vm.modal.body = res.data.message;

        });
        vm.modalAnotation = false;
        vm.name = null;
        vm.description = null;
      }

      /*vm.delete = function (index) {
        console.log(index);
        var anotationItem = vm.anotations[index];
        console.log(anotationItem);
        projectService.deleteAnotation(index);
        init();
      }

      vm.preModify = function (index) {
        var anotationItem = vm.anotations[index];
        var itemChange = {
          name: anotationItem.name,
          description: anotationItem.description
        }
        vm.itemChange = itemChange;
      }
      vm.modify = function (index) {
        var anotationItem = vm.anotations[index];
        var anotationItemFinale = vm.itemChange;
        projectService.putAnotation(anotationItem, anotationItemFinale);
        init();
      }*/
    } 
})();

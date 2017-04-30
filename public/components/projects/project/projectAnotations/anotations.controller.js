(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('anotationsController', anotationsController);

    function anotationsController ($scope, projectService, $stateParams) {
      var vm = this;
      var projectId = $stateParams.proyectoId;
      vm.projectId = projectId;
  /*    function init(){ 
        vm.anotations = projectService.getAnotations();
      }
      init();*/
      vm.modalAnotation = false;
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
      };
      vm.save= function () {
        var newAnotation = {
          projectId : vm.projectId,
          name : vm.name,
          description : vm.description,
        }
        projectService.addAnotation(newAnotation).then(function(res){
              console.log(res);

        vm.modalAnotation = false;
        vm.name = null;
        vm.description = null;
      });

   /*   vm.delete = function (index) {
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
  } 
})();
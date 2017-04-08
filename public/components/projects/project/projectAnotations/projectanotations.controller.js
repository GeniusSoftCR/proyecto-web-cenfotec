(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectAnotationsController', projectAnotations);

    function projectAnotations ($scope, projectAnotationsService, $stateParams) {
      var anotationsCtrl = this;
      var projectId = $stateParams.proyectoId;
      anotationsCtrl.projectId = projectId;
      function init(){ 
        anotationsCtrl.anotations = projectAnotationsService.getAnotations();
      }
      init();
      anotationsCtrl.modalAnotation = false;
      anotationsCtrl.extend = false;
      anotationsCtrl.showModal = function () {
        anotationsCtrl.modalAnotation = true;
      }
      anotationsCtrl.closeModal = function () {
        anotationsCtrl.modalAnotation = false;
      }

      anotationsCtrl.activeMenuIndex;
      anotationsCtrl.showSubmenu = function (item) {
        if(anotationsCtrl.activeParentIndex == item){
            anotationsCtrl.activeParentIndex = "";
        } else {
            anotationsCtrl.activeParentIndex = item;
        }
      }
      anotationsCtrl.isShowing = function(index) {
          return anotationsCtrl.activeParentIndex === index;
      };
      anotationsCtrl.save= function () {
        var newAnotation = {
          id : 1,
          projectId : anotationsCtrl.projectId,
          name : anotationsCtrl.data.name,
          description : anotationsCtrl.data.desc,
          iduserCreate: 1
        }
        projectAnotationsService.addAnotation(newAnotation);
        anotationsCtrl.modalAnotation = false;
        anotationsCtrl.data.name = null;
        anotationsCtrl.data.desc = null;
      }

      anotationsCtrl.delete = function (index) {
        console.log(index);
        var anotationItem = anotationsCtrl.anotations[index];
        console.log(anotationItem);
        projectAnotationsService.deleteAnotation(index);
        init();
      }

      anotationsCtrl.preModify = function (index) {
        var anotationItem = anotationsCtrl.anotations[index];
        var itemChange = {
          name: anotationItem.name,
          description: anotationItem.description
        }
        anotationsCtrl.itemChange = itemChange;
      }
      anotationsCtrl.modify = function (index) {
        var anotationItem = anotationsCtrl.anotations[index];
        var anotationItemFinale = anotationsCtrl.itemChange;
        projectAnotationsService.putAnotation(anotationItem, anotationItemFinale);
        init();
      }
    } 
})();
(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectAnotationsController', projectAnotations);

    function projectAnotations ($scope, projectAnotationsService) {
      var anotationsCtrl = this;

      function init(){ 
        anotationsCtrl.anotations = projectAnotationsService.getAnotations();
      }
      init();
  
      anotationsCtrl.save= function () {
        var newAnotation = {
          id : 1,
          projectId : 1,
          name : anotationsCtrl.data.name,
          description : anotationsCtrl.data.desc,
          iduserCreate: 1
        } 
        projectAnotationsService.addAnotation(newAnotation);
      }

      anotationsCtrl.delete = function (index) {
        var anotationItem = anotationsCtrl.anotations[index];
        projectAnotationsService.deleteAnotation(anotationItem);
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
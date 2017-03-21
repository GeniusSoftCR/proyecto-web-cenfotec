(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('watchProjectController', watchProject);

    function watchProject ($scope, $stateParams, watchProjectService) {
      var watchProjectCtrl = this;

      watchProjectCtrl.projectId = $stateParams.proyectoId;

      function init() {
        watchProjectCtrl.project = watchProjectService.getProjectbyId(watchProjectCtrl.projectId);
      }
      init();
    } 
})();
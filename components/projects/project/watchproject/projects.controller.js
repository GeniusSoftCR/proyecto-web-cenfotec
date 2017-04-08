(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('watchProjectController', watchProject);

    function watchProject ($scope, $stateParams, watchProjectService) {
      var watchProjectCtrl = this;

      watchProjectCtrl.projectId = $stateParams.proyectoId;
      //Objetemos toda la informacion del proyecto
      watchProjectCtrl.project = watchProjectService.getProjectbyId(watchProjectCtrl.projectId);
      //Obtenemos toda la información del cliente
      watchProjectCtrl.client = watchProjectService.getClientbyId(watchProjectCtrl.project.clientId);
      //Estado del proyecto
      watchProjectCtrl.status = watchProjectService.getStatusId(watchProjectCtrl.project.state_key);


    } 
})();
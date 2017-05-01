(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectController', projectController);

    projectController.$inject = ['$q','$stateParams','projectService'];

    function projectController ($q,$stateParams,projectService) {

      var vm = this;
      vm.project = {};
      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        $q.when(res).then(function () {
          vm.project=res.data;
        })        
      });

      //var watchProjectCtrl = this;
      // watchProjectCtrl.id = $stateParams.id;
      // console.log(watchProjectCtrl.id)
      // //Objetemos toda la informacion del proyecto
      // watchProjectCtrl.project = watchProjectService.getProjectbyId(watchProjectCtrl.projectId);
      // //Obtenemos toda la información del cliente
      // watchProjectCtrl.client = watchProjectService.getClientbyId(watchProjectCtrl.project.clientId);
      // //Estado del proyecto
      // watchProjectCtrl.status = watchProjectService.getStatusId(watchProjectCtrl.project.state_key);

    } 
})();

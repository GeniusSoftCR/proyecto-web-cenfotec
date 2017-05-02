(function(){
  /* Controlador de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('projectController', projectController);

    projectController.$inject = ['$q','$stateParams','projectService','$window'];

    function projectController ($q,$stateParams,projectService,$window) {

      var vm = this;
      vm.project = {};
      projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        $q.when(res).then(function () {
          vm.project=res.data[0];
          init();
        })      
      });

      function init() {
        switch (vm.project.state) {
          case "inRevision":
            vm.state="En revisión";
            vm.on=false;
            vm.off=false;
            break;
          case "aproved":
            vm.state="Aprobado";
            vm.on=true;
            vm.off=false;
            break;
          case "rejected":
            vm.state="Rechazado";
            vm.on=false;
            vm.off=false;
            break;
          case "inProcess":
            vm.state="En proceso";
            vm.on=false;
            vm.off=true;
            break;
          case "ended":
            vm.state="Finalizado";
            vm.on=true;
            vm.off=false;
            break;
        }
      }

      vm.fetch=function(){
        // projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        //   $q.when(res).then(function () {
        //     vm.project=res.data[0];
        //   })      
        // });
        $window.location.reload();
      }

      vm.activate=function(){
        vm.project.state="inProcess";
        projectService.updateProject(vm.project).then(function(res){
          console.log("El proyecto ha iniciado");
        });
        vm.fetch();
      }

      vm.desactivate=function(){
        vm.project.state="ended";
        projectService.updateProject(vm.project).then(function(res){
          console.log("El proyecto ha iniciado");
        });
        vm.fetch();
      }

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

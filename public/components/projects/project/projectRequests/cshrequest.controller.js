/* Controlador de Request de proyecto de Cenfotec Software House */
(function(){
  'use strict';
  angular
  .module('cshApp')
  .controller('projectController' projectController);

  function projectController($scope, ImageService, filepickerService, $window, Upload, projectService){
    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();
    vm.send = false;
    vm.toSend = true;
    vm.pickFile = pickFile;
    vm.onSuccess = onSuccess;

    function pickFile(){
      filepickerService.pick(
        {
          extension: '.pdf',
          language: 'es',
          container: 'modal',
          services: ['COMPUTER']
        },
        onSuccess
      );
    };
    function onSuccess(Blob){
      console.log(Blob);
      vm.projectFile = Blob.url;
    };
    vm.preSave = function(){
      vm.cloudObj.data.file = document.getElementById("imageProjectRequest").files[0];
      Upload.upload(vm.cloudObj)
        .sucess(function(data){
          vm.save(data.url);
        })
    };
    vm.save = function(pimage){
      var newProjectRequest = {
        projectName: vm.projectName,
        email: vm.email,
        nId : vm.nId,
        companyName : vm.companyName,
        projectManager : vm.projectManager,
        money : vm.money
      }
    }
  };
})()
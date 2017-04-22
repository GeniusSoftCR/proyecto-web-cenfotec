(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('projectController', projectController);

  projectController.$inject = ['$scope', '$window', 'projectService', 'ImageService', 'filepickerService', 'Upload'];

  function projectController($scope, $window, projectService, ImageService, filepickerService, Upload){
    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();
    vm.send = false;
    vm.toSend = true;
    vm.pickFile = pickFile;
    vm.onSuccess = onSuccess;

    function pickFile(){
      filepickerService.pick(
        {extension: '.pdf',
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
          .success(function(data){
          vm.save(data.url);
          });
      }

    vm.save = function(pimage){
      var newProjectRequest = {
        idNum : JSON.stringify(vm.nId),
        name: vm.projectName,
        money : JSON.stringify(vm.money),
        objective : vm.objective,
        state : 'inRevision',
        client : {
          companyName : vm.companyName,
          email: vm.email,
          manager : vm.projectManager,
          industry : vm.industry
        },
        images : [
          {
            "url" : pimage
          }
        ],
      };
      projectService.addProject(newProjectRequest).then(function(res){
        console.log(res);
      })
    };
  };
})()
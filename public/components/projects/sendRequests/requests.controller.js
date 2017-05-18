(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('sendRequest', sendRequest);

  sendRequest.$inject = ['$scope', '$window', 'projectService', 'ImageService', 'filepickerService', 'Upload'];

  function sendRequest($scope, $window, projectService, ImageService, filepickerService, Upload){
    var vm = this;
    vm.project = {};
    vm.modal = {};
    vm.cloudObj = ImageService.getConfiguration();
    vm.send = false;
    vm.toSend = true;
    vm.project.pickFile = pickFile;
    vm.onSuccess = onSuccess;
    vm.loading = false;
    vm.submitted = false;
    vm.tosendBad = false;
    vm.send = false;
    vm.toSend = true;
    vm.sendBad = false;

    //Retroalimentacion de filestack y cloudinary
    $(function() {
      $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
      });
      $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {
          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;
          if(input.length) {
            input.val(log);
          }else{
            if(log) alert(log);
          }
        });
      });
    });
    //funcion que almacena el pdf
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
      vm.project.projectFile = Blob.url;
      vm.loading = false;
      vm.fileName = Blob.filename;
    };
    //funcion q almacena las imagenes
    vm.preSave = function(newProject){
        vm.cloudObj.data.file = document.getElementById("imageProjectRequest").files[0];
        if (vm.cloudObj.data.file) {
          Upload.upload(vm.cloudObj).success(function(data){
            vm.save(newProject, data.url);
          });
        }else{
          vm.save(newProject);
        };
      };
    //Se envian el object al service
    vm.save = function(newProject ,pimage){
      var image = new Object({"url" : pimage});
      newProject.state = 'inRevision';
      newProject.images = [image];
      projectService.addProject(newProject).then(function(res){
        vm.project = {};
          vm.modal.title = 'Solicitudes de proyectos';
          vm.modal.body = res.data.message;  
      });
    };
  };
})()
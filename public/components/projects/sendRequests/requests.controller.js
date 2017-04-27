(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('sendRequest', sendRequest);

  sendRequest.$inject = ['$scope', '$window', 'projectService', 'ImageService', 'filepickerService', 'Upload'];

  function sendRequest($scope, $window, projectService, ImageService, filepickerService, Upload){
    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();
    vm.send = false;
    vm.toSend = true;
    vm.pickFile = pickFile;
    vm.onSuccess = onSuccess;

    //retroalimetacion de las imagenes
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
            if( input.length ) {
              input.val(log);
            }else{
              if( log ) alert(log);
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
      console.log(Blob);
      vm.projectFile = Blob.url;
    };
    //funcion q almacena las imagenes
    vm.preSave = function(){
        vm.cloudObj.data.file = document.getElementById("imageProjectRequest").files[0];
        if (vm.cloudObj.data.file) {
          Upload.upload(vm.cloudObj)
          .success(function(data){
          vm.save(data.url);
          });
        }else{
          vm.save();
        }

      }
    //Se envian el object al service
    vm.save = function(pimage){
      var newProjectRequest = {
        idNum : vm.nId,
        name: vm.projectName,
        money : vm.money,
        objective : vm.objective,
        state : 'inRevision',
        client : {
          companyName : vm.companyName,
          email: vm.email,
          manager : vm.projectManager,
          industry : vm.industry
        },
        resume : vm.projectFile,
        images : [
          {
            "url" : pimage
          }
        ],
      };
      projectService.addProject(newProjectRequest).then(function(res){
        console.log(res);
      });
      vm.nId = null;
      vm.projectName = null;
      vm.money = null;
      vm.objective = null;
      vm.companyName = null;
      vm.email = null;
      vm.projectManager = null;
      vm.industry = null;
    };
    vm.modal = {
        config:function (type) {
          vm.modal.type = type;
          switch(vm.modal.type){
            case 'error':
              vm.modal.title = "Recuperar contraseña";
              vm.modal.body = "Para recuperar su contraseña introduzca su correo electrónico";
            break;
            case 'logIn':
              vm.modal.title = "Error al inciar sesión";              
            break;
          };
        }
      };  
  };
})()
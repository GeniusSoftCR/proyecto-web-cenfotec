(function(){
  'use strict';
  angular
    .module('cshApp')
    .controller('userApController', userApController);

    userApController.$inject = ['userService','ImageService','Upload','localStorageService'];

    function userApController(userService,ImageService,Upload,localStorageService){
      //controlador
      var vm = this; 
      vm.cloudObj = ImageService.getConfiguration();
      vm.prof = {};
      vm.admi = {};
      vm.asis = {};
      vm.modal = {};
      vm.users = {};

      userService.getUsers().then(function(res){
        vm.users = res.data;
      });

      //Muestra el formualrio en cada casilla
      $(document).ready(function() {
        $("div.bhoechie-tab-menu>div.list-group>a").click(function(e){
          e.preventDefault();
          $(this).siblings('a.active').removeClass("active");
          $(this).addClass("active");
          var index = $(this).index();
          $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
          $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
      });

    //En el input de Avatar muestra al lado de escoger, la imagen que se ha seleccionado
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
                } else {
                  if( log ) alert(log);
                }
            });
        });
      });
        //fin de mostrar avatar

      //Guarda los datos del Profesor
      vm.preSaveProf = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.save(data.url);
          });
      };

      vm.save = function(pimage){
        var newUserProf = {
          idNum : vm.prof.id,
          name : vm.prof.name,
          surname : vm.prof.surName,
          secondSurname : vm.prof.secondSurname,
          email : vm.prof.email,
          phone : vm.prof.phone,
          councilMember : vm.prof.councilMember,
          avatar : pimage,
          password : vm.prof.password,
          state: 'active',
          role: 'professor',
         specialty : vm.prof.specialty
        };

        console.log(newUserProf);
        //envia el usuario al user.service
        userService.addUser(newUserProf).then(function(res){
          console.log(res);
         
            vm.modal.title = 'Registro de Usuario';

            vm.modal.body = res.data.message;
        });

          $('#regProf-Modal').modal('show');

          vm.prof.id = null;
          vm.prof.name = null;
          vm.prof.surName = null;
          vm.prof.secondSurname = null;
          vm.prof.email = null;
          vm.prof.phone = null;
          vm.prof.councilMember = null;
          vm.pimage = null;
          vm.prof.password = null;
          vm.prof.confirmPassword = null;
          vm.prof.specialty = null;

      };

      vm.preSaveAdmi = function(){
        vm.cloudObj.data.file = document.getElementById("photoAdmi").files[0];

        Upload.upload(vm.cloudObj)
          .success(function(data){
          vm.saveAdmi(data.url);
        });
     };

      vm.saveAdmi = function(pimage){
        var newUserAdmi ={
          idNum : vm.admi.id,
          name : vm.admi.name,
          surname : vm.admi.surName,
          secondSurname : vm.admi.secondSurname,
          email : vm.admi.email,
          phone : vm.admi.phone,
          avatar:  pimage,
          password : vm.admi.password,
          state : 'active',
          role: 'admin',
          jobPosition : vm.admi.jobPosition
        };

        userService.addUser(newUserAdmi).then(function(res){
          console.log(res);
          vm.admi = {};
            vm.modal.title = 'Registro de Usuario';

            vm.modal.body = res.data.message;
        });

        $('#regAdmi-Modal').modal('show');

        vm.admi.id = null;
        vm.admi.name = null;
        vm.admi.surName = null;
        vm.admi.secondSurname = null;
        vm.admi.email = null;
        vm.admi.phone = null;
        vm.admi.pimage = null;
        vm.admi.password = null;
        vm.admi.confirmPassword = null;
        vm.admi.jobPosition = null; 
      };

      vm.preSaveAsis = function(){
        vm.cloudObj.data.file = document.getElementById("photoAsis").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
          vm.saveAsis(data.url);
        });
     };

      vm.saveAsis = function(pimage){
        var newUserAssistant ={
          idNum : vm.asis.id,
          name : vm.asis.name,
          surname : vm.asis.surName,
          secondSurname : vm.asis.secondSurname,
          email : vm.asis.email,
          phone : vm.asis.phone,
          avatar:  pimage,
          password : vm.asis.password,
          state : 'active',
          role: 'assistant',
          jobPosition : vm.asis.jobPosition
        };

        console.log(newUserAssistant);
        //envia el usuario al user.service
        userService.addUser(newUserAssistant).then(function(res){
              console.log(res);
            vm.modal.title = 'Registro de Usuario';

            vm.modal.body = res.data.message;
        });

        $('#regAsis-Modal').modal('show');

        vm.asis.id = null;
        vm.asis.name = null;
        vm.asis.surName = null;
        vm.asis.secondSurname = null;
        vm.asis.email = null;
        vm.asis.phone = null;
        vm.asis.image = null;
        vm.asis.password = null;
        vm.asis.confirmPassword = null;
        vm.asis.jobPosition = null;

      };
   }
})();


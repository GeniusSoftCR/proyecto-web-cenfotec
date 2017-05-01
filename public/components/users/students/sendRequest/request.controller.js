(function(){
  'use strict'
  angular
    .module('cshApp')
    .controller('sendRequest', sendRequest);
    
    sendRequest.$inject  = ['$scope','$window','userService','configService','ImageService','filepickerService','Upload']; //,'addCareersService'  **BUG**

    function sendRequest($scope,$window,userService,configService,ImageService,filepickerService,Upload){ //,addCareersService**BUG**
      var vm = this;
      //careers = addCareersService.getCareer(); //llama a la funcion que llena el mutiselect**BUG**
      vm.send = false;
      vm.toSend = true;
      vm.sendBad = false;
      vm.modal = {};
      vm.tosendBad = false;
      vm.cloudObj = ImageService.getConfiguration();
      vm.pickFile = pickFile;
      vm.onSuccess = onSuccess;
      vm.submitted = false;
      vm.careers = {};
      vm.loading = false;


      configService.getCareers().then(function(res){
        vm.careers = res.data;
      });



      //En el input de Avatar muestra al lado de escoger, la imagen que se ha seleccionad
      $(function() {

        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function() {
          var input = $(this),
              numFiles = input.get(0).files ? input.get(0).files.length : 1,
              label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
          input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
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


     //funcion que guarda archivos
      
    function pickFile(){
      vm.loading = true;
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
      vm.fileName = Blob.filename;
      vm.loading = false;
      console.log(vm.fileName);
      vm.resumeUrl = Blob.url;
    };


      // cloudinary
      vm.preSave = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.save(data.url);
          });
      }
      vm.save= function(pimage){
        var newUser ={
          idNum : vm.id,
          name : vm.name,
          surname : vm.surName,
          secondSurname : vm.secondSurname,
          email : vm.email,
          phone : vm.phone,
          avatar : pimage,
          password : vm.password,
          //confirmPassword : vm.confirmPassword,
          state: 'postulate',
          role: 'student',
          birthdate : vm.birthdate,
          careers : vm.career, //me parece q esto deberia ser un arreglo
          justification: null,
          resumeUrl : vm.resumeUrl,
          githubUrl : vm.githubUrl,
          websiteUrl : vm.websiteUrl    
          };

        console.log(newUser);
        //envia el usuario al user.service
        userService.addUser(newUser).then(function(res){
              console.log(res);
            vm.student = {};
            vm.modal.title = 'Solicitud de estudiante';

            vm.modal.body = res.data.message;

        });

        vm.id = null;
        vm.name = null;
        vm.surName = null;
        vm.secondSurname = null;
        vm.email = null;
        vm.mail = null;
        vm.phone = null;
        vm.pimage = null;
        vm.password = null;
        vm.confirmPassword = null;
        vm.birthdate = null;
        vm.careers = null;
        vm.resumeUrl = null;
        vm.githubUrl = null;
        vm.websiteUrl = null;

        vm.send = true;
        vm.toSend = false;
      }

      };
  
})();
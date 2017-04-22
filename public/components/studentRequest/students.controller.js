(function(){
  'use strict'
  angular
    .module('cshApp')
    .controller('studentController', studentController);
    
    studentController.$inject  = ['$scope','$window','userService','ImageService','filepickerService','Upload','addCareersService'];

    function studentController($scope,$window,userService,ImageService,filepickerService,Upload,addCareersService){
      var vm = this,
          careers = addCareersService.getCareer(); //llama a la funcion que llena el mutiselect
          vm.cloudObj = ImageService.getConfiguration();
          vm.careers = careers; //guarda las carreras
          vm.pickFile = pickFile;
          vm.onSuccess = onSuccess;
          vm.submitted = false;
      //funcion que guarda archivos
      function pickFile(){
        filepickerService.pick(
          {extension:'.pdf',
          language: 'es',
          container: 'modal',
          services: ['COMPUTER']},
          onSuccess
        );
      }
      //Files
      function onSuccess(Blob){
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
          confirmPassword : vm.confirmPassword,
          state: 'postulate',
          role: 'student',
          birthdate : vm.birthdate,
          careers : vm.careers, //me parece q esto deberia ser un arreglo
          justification: null,
          resumeUrl : vm.resumeUrl,
          githubUrl : vm.githubUrl,
          websiteUrl : vm.websiteUrl    
          };

        console.log(newUser);
        //envia el usuario al user.service
        userService.addUser(newUser).then(function(res){
              console.log(res)
          });
      }
  }
})();
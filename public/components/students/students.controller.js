(function(){
  'use strict'
  angular
    .module('cshApp')
    .controller('studentController', studentController) ;
    
    studentController.$inject = ['$scope','userService','ImageService','filepickerService','$window','Upload','localStorageService','addCareersService'];

    
    function studentController($scope, userService,ImageService,filepickerService,$window,Upload, localStorageService,addCareersService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      

      var studentCtrl = this; //binding del controlador con el html, solo en el controlador
      var careers = addCareersService.getCareer();
      studentCtrl.careers = careers;

      studentCtrl.cloudObj = ImageService.getConfiguration();

   
      studentCtrl.submitted = false;

      //Files
      studentCtrl.pickFile = pickFile;
      studentCtrl.onSuccess = onSuccess;



      function pickFile(){
          filepickerService.pick(
              {extension:'.pdf',
              language: 'es',
              container: 'modal',
              services: ['COMPUTER']
              },
              onSuccess
          );
      };

       function onSuccess(Blob){
        // cshReqCtrl.files.push(Blob);
        studentCtrl.stu.resumeUrl = Blob.url;
        // $window.localStorage.setItem('files', JSON.stringify(cshReqCtrl.files));
      };

      var password = document.getElementById("txtpassword"),
          confirm_password = document.getElementById("txtconfirmPassword");

      function validatePassword(){
        if(password.value != confirm_password.value) {
          confirm_password.setCustomValidity("La contraseña es diferente");
        } else {
          confirm_password.setCustomValidity('');
        }
      }

      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        studentCtrl.studentList = userService.getUser();
      }
      init();

      studentCtrl.preSave = function(){
        studentCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(studentCtrl.cloudObj)
          .success(function(data){
            studentCtrl.save(data.url);
          });
      }

      /*studentCtrl.testSave = function(){
        var newUser = {

          "idNum":"115470522",
          "name":"Esteban",
          "surname":"Fonseca",
          "secondSurname":"Blanco",
          "password":"2310",
          "email":"efonsecab@ucenfotec.ac.cr",
          "username":"efonsecab",
          "state":"inRevision",
          "role":"student"
        }
        userService.addUser(newUser).then(function (res) {
          console.log(res)
        })
      }     */

      studentCtrl.save= function(pimage){
        var newUser ={
          role_key: 4,
          name : studentCtrl.stu.name,
          surname : studentCtrl.stu.surName,
          secondSurname : studentCtrl.stu.secondSurname,
          id : studentCtrl.stu.id,
          birthdate : studentCtrl.stu.birthdate,
          email : studentCtrl.stu.email,
          password : studentCtrl.stu.password,
          confirmPassword : studentCtrl.stu.confirmPassword,
          justificacion: null,
          careers : studentCtrl.stu.careers,
          resumeUrl : studentCtrl.stu.resumeUrl,
          gitHubUrl : studentCtrl.stu.gitHubUrl,
          websiteUrl : studentCtrl.stu.websiteUrl,
          cellphoneNumber : studentCtrl.stu.cellphoneNumber,
          avatarUrl: pimage
        }
        
        userService.addUser(newUser).then(function (res) {
          console.log(res)
        })

        studentCtrl.stu.name = null;
        studentCtrl.stu.surName = null;
        studentCtrl.stu.secondSurname = null;
        studentCtrl.stu.id = null;
        studentCtrl.stu.birthdate = null;
        studentCtrl.stu.email = null;
        studentCtrl.stu.password = null;
        studentCtrl.stu.confirmPassword = null;
        studentCtrl.stu.careers = null;
        studentCtrl.stu.resumeUrl = null;
        studentCtrl.stu.gitHubUrl = null;
        studentCtrl.stu.websiteUrl = null;
        studentCtrl.stu.cellphoneNumber = null;
        studentCtrl.stu.avatarUrl = null;

        studentCtrl.submitted = true;
      }
    }
     //se establece un objeto de angular normal

})();

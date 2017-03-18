(function(){
  'use strict';
  angular
    .module('cshApp')
    .controller('studentController', studentController);
    function studentController(studentService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var studentCtrl = this; //binding del controlador con el html, solo en el controlador
      studentCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        studentCtrl.studentList = studentService.getStudent();
      }
      init();

      studentCtrl.preSave = function(){
        studentCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(studentCtrl.cloudObj)
          .success(function(data){
            studentCtrl.save(data.url);
          });
      }

   
      studentCtrl.save= function(pimage){
        var newStudent ={
          name : studentCtrl.name,
          firstName : studentCtrl.firstName,
          surName : studentCtrl.surName,
          id : studentCtrl.id,
          birthday : studentCtrl.birthday,
          email : studentCtrl.email,
          password : studentCtrl.password,
          career : studentCtrl.career,
          userGit : studentCtrl.userGit,
          link : studentCtrl.link,
          cellphoneNumber : studentCtrl.cellphoneNumber,
          avatar:  pimage
        }

        studentService.addStudent(newStudent);

        studentCtrl.name = null;
        studentCtrl.firstName = null;
        studentCtrl.surName = null;
        studentCtrl.id = null;
        studentCtrl.birthday = null;
        studentCtrl.email = null;
        studentCtrl.password = null;
        studentCtrl.career = null;
        studentCtrl.userGit = null;
        studentCtrl.link = null;
        studentCtrl.cellphoneNumber = null;
        studentCtrl.avatar = null;
      } 
    }
})();
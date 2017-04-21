(function(){
  'use strict'
  angular
    .module('cshApp')
    .controller('studentController', studentController);
    
    studentController.$inject = ['$scope','$window','userService','ImageService','filepickerService','Upload','addCareersService'];

    
    function studentController($scope,$window,userService,ImageService,filepickerService,Upload,addCareersService){
      //controlador
      

      var studentCtrl = this; //binding del controlador con el html, solo en el controlador
      var careers = addCareersService.getCareer();
      studentCtrl.stu = {};
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
          idNum : studentCtrl.stu.id,
          name : studentCtrl.stu.name,
          surname : studentCtrl.stu.surName,
          secondSurname : studentCtrl.stu.secondSurname,
          email : studentCtrl.stu.email,
          phone : studentCtrl.stu.phone,
          avatarUrl: pimage,
          password : studentCtrl.stu.password,
          confirmPassword : studentCtrl.stu.confirmPassword,
          state: 'postulate',
          role: 'student',
          birthdate : studentCtrl.stu.birthdate,
          careers : studentCtrl.stu.careers,
          justificacion: null,
          resumeUrl : studentCtrl.stu.resumeUrl,
          githubUrl : studentCtrl.stu.githubUrl,
          websiteUrl : studentCtrl.stu.websiteUrl
        }

        console.log(newUser);
        
        userService.addUser(newUser).then(
          function (res) {
              console.log(res)
          },function (res) {
            console.log(res)
        });

        studentCtrl.stu = {}
       /* studentCtrl.stu.name = null;
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

        studentCtrl.submitted = true;*/
      }
    }
})();
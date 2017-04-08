(function(){
  angular
    .module('cshApp')
    .controller('studentController', studentController);
    
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

      studentCtrl.submitForm = function() {

            // check to make sure the form is completely valid
            if (studentCtrl.studentForm.$valid) {
                alert('our form is amazing');
            }

        };

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

      studentCtrl.save= function(pimage){
        var newStudent ={
          state_key : 1,
          state: "Postulado",
          role_key: 4,
          role: "student",
          name : studentCtrl.stu.name,
          surname : studentCtrl.stu.surName,
          secondSurname : studentCtrl.stu.secondSurname,
          id : studentCtrl.stu.id,
          birthdate : studentCtrl.stu.birthdate,
          mail : studentCtrl.stu.mail,
          password : studentCtrl.stu.password,
          carrers : studentCtrl.stu.carrers,
          resumeUrl : studentCtrl.stu.resumeUrl,
          gitHubUrl : studentCtrl.stu.gitHubUrl,
          websiteUrl : studentCtrl.stu.websiteUrl,
          cellphoneNumber : studentCtrl.stu.cellphoneNumber,
          avatarUrl: pimage
        }
        console.log(newStudent);
        
        userService.addUser(newStudent);

        studentCtrl.stu.name = null;
        studentCtrl.stu.surName = null;
        studentCtrl.stu.secondSurname = null;
        studentCtrl.stu.id = null;
        studentCtrl.stu.birthdate = null;
        studentCtrl.stu.mail = null;
        studentCtrl.stu.password = null;
        studentCtrl.stu.carrers = null;
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

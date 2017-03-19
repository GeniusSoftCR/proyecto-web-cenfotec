(function(){
  angular
    .module('cshApp')
    .controller('studentController', studentController);
    function studentController($scope, studentService,ImageService,filepickerService,$window,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var studentCtrl = this; //binding del controlador con el html, solo en el controlador
      studentCtrl.cloudObj = ImageService.getConfiguration();


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
        studentCtrl.studentFile = Blob.url;
        // $window.localStorage.setItem('files', JSON.stringify(cshReqCtrl.files));
      };


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
          name : studentCtrl.stu.name,
          firstName : studentCtrl.stu.firstName,
          surName : studentCtrl.stu.surName,
          id : studentCtrl.stu.id,
          birthday : studentCtrl.stu.birthday,
          email : studentCtrl.stu.email,
          password : studentCtrl.stu.password,
          career : studentCtrl.stu.career,
          course : studentCtrl.stu.course,
          studentFile : studentCtrl.stu.studentFile,
          userGit : studentCtrl.stu.userGit,
          link : studentCtrl.stu.link,
          cellphoneNumber : studentCtrl.stu.cellphoneNumber,
          avatar: pimage
        }
        console.log(newStudent);
        
        studentService.addStudent(newStudent);

        studentCtrl.stu.name = null;
        studentCtrl.stu.firstName = null;
        studentCtrl.stu.surName = null;
        studentCtrl.stu.id = null;
        studentCtrl.stu.birthday = null;
        studentCtrl.stu.email = null;
        studentCtrl.stu.password = null;
        studentCtrl.stu.career = null;
        studentCtrl.stu.course = null;
        studentCtrl.stu.userGit = null;
        studentCtrl.stu.link = null;
        studentCtrl.stu.cellphoneNumber = null;
        studentCtrl.stu.avatar = null;
      }
    }
     //se establece un objeto de angular normal

})();

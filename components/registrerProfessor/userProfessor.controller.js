(function(){
  angular
    .module('cshApp')
    .controller('userProfessorController', userProfessorController);
    function userProfessorController(userProfessorService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userProfessorCtrl = this; //binding del controlador con el html, solo en el controlador
      userProfessorCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        userProfessorCtrl.userProfessorList = userProfessorService.getProfessor();
      }
      init();

      userProfessorCtrl.preSave = function(){
        userProfessorCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userProfessorCtrl.cloudObj)
          .success(function(data){
            userProfessorCtrl.save(data.url);
          });
      }

      userProfessorCtrl.save= function(pimage){
        var newUserProfessor ={
          name : userProfessorCtrl.prof.name,
          lastName : userProfessorCtrl.prof.lastName,
          surName : userProfessorCtrl.prof.surName,
          specialty : userProfessorCtrl.prof.specialty,
          email : userProfessorCtrl.prof.email,
          password : userProfessorCtrl.prof.password,
          consejo : userProfessorCtrl.prof.consejo,
          avatar:  pimage
        }

        userProfessorService.addProfessor(newUserProfessor);

        userProfessorCtrl.prof.name = null;
        userProfessorCtrl.prof.lastName = null;
        userProfessorCtrl.prof.surName = null;
        userProfessorCtrl.prof.specialty = null;
        userProfessorCtrl.prof.email = null;
        userProfessorCtrl.prof.password = null;
        userProfessorCtrl.prof.consejo = null;
        userProfessorCtrl.prof.image = null;
      }

      userProfessorCtrl.deleteProf = function (index) {
        console.log(index);
        userProfessorService.deleteProfessor(index);
      }


  }
})()
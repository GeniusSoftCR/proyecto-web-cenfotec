(function(){
  angular
    .module('cshApp')
    .controller('userProfessorController', userProfessorController);

    userProfessorController.$inject = ['userProfessorService','ImageService','Upload','localStorageService'];

    function userProfessorController(userProfessorService,ImageService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userProfessorCtrl = this; //binding del controlador con el html, solo en el controlador
      userProfessorCtrl.cloudObj = ImageService.getConfiguration();
      userProfessorCtrl.prof = {};
      userProfessorCtrl.edit = {};

      userProfessorCtrl.userProfessorList = [];
      
      userProfessorCtrl.userProfessorList = userProfessorService.getProfessors();

      userProfessorCtrl.rejection=false;
      userProfessorCtrl.edit.modal=false;


      userProfessorCtrl.preSave = function(){
        userProfessorCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userProfessorCtrl.cloudObj)
          .success(function(data){
            userProfessorCtrl.saveP(data.url);
          });
      }

      userProfessorCtrl.saveP = function(pimage){
        var newUserProfessor ={
          key : 2,
          role : "professor",
          name : userProfessorCtrl.prof.name,
          surname : userProfessorCtrl.prof.surname,
          secondSurname : userProfessorCtrl.prof.secondSurname,
          id : userProfessorCtrl.prof.id,
          specialty : userProfessorCtrl.prof.specialty,
          mail : userProfessorCtrl.prof.mail,
          password : userProfessorCtrl.prof.password,
          councilMember : userProfessorCtrl.prof.councilMember,
          availableForProyects : userProfessorCtrl.prof.availableForProyects,
          avatar:  pimage,
        }

        userProfessorService.addProfessor(newUserProfessor);

        userProfessorCtrl.prof.name = null;
        userProfessorCtrl.prof.surname = null;
        userProfessorCtrl.prof.secondSurname = null;
        userProfessorCtrl.prof.id = null;
        userProfessorCtrl.prof.specialty = null;
        userProfessorCtrl.prof.mail = null;
        userProfessorCtrl.prof.password = null;
        userProfessorCtrl.prof.councilMember = null;
        userProfessorCtrl.prof.availableForProyects = null;
        userProfessorCtrl.prof.image = null;
      }

      userProfessorCtrl.deleteProf = function (index) {
        console.log(index);
        userProfessorService.deleteProfessor(index);
      }


     userProfessorCtrl.viewProf= function(index){
        userProfessorCtrl.edit.modal=true;
        userProfessorCtrl.editProf = index; 
      }

     userProfessorCtrl.preModify = function () {
      var prof = userProfessorCtrl.prof.id;
      console.log(prof);

      var listaProfesor = userProfessorService.getProfessors();
      var newUserProfessor = [];

      for (var i = 0; i < listaProfesor.length; i++) {
        var idProfessor = listaProfesor[i].id;

        if (idProfessor == prof) {


         var newUserProfessorEdited ={
         // key :
          name : listaProfesor[i].name,
          surname : listaProfesor[i].surname,
          secondSurname : listaProfesor[i].secondSurname,
          id : listaProfesor[i].id,
          specialty : userProfessorCtrl.edit.specialty,
          mail : listaProfesor[i].mail,
          password : listaProfesor[i].password,
          councilMember : userProfessorCtrl.edit.councilMember,
          availableForProyects : userProfessorCtrl.edit.availableForProyects,
          avatar:  listaProfesor[i].avatar
        }

        newUserProfessor.push(newUserProfessorEdited);
        }else {
        newUserProfessor.push(listaProfesor[i]);
        }
      }
      userProfessorService.setLocalProfEdited(newUserProfessor);
  }
}
  
})();



(function(){
  angular
    .module('cshApp')
    .controller('userApController', userApController);

    userApController.$inject = ['userService','ImageService','Upload','localStorageService'];

    function userApController(userService,ImageService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userAprCtrl = this; //binding del controlador con el html, solo en el controlador
      userAprCtrl.cloudObj = ImageService.getConfiguration();
      userAprCtrl.ap = {};
      userAprCtrl.edit = {};
      userAprCtrl.asis = {};


      userAprCtrl.userList = [];
      
      userAprCtrl.userList = userService.getUsers();

      userAprCtrl.rejection=false;
      userAprCtrl.edit.modal=false;

      userAprCtrl.send = false;
      userAprCtrl.toSend = true;

      userAprCtrl.preSave = function(){
        userAprCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAprCtrl.cloudObj)
          .success(function(data){

            var role = userAprCtrl.ap.role;
            var key = 0;

            if (role == 'administrador') {
              key = 1;
            } else {
              key = 2;
            }
            userAprCtrl.save(data.url,key);
          });
      }

      userAprCtrl.save = function(pimage,pkey){
        var newUser ={
          key : pkey,
          role : userAprCtrl.ap.role,
          name : userAprCtrl.ap.name,
          surname : userAprCtrl.ap.surname,
          secondSurname : userAprCtrl.ap.secondSurname,
          id : userAprCtrl.ap.id,
          specialty : userAprCtrl.ap.specialty,
          mail : userAprCtrl.ap.mail,
          password : userAprCtrl.ap.password,
          councilMember : userAprCtrl.ap.councilMember,
          availableForProyects : userAprCtrl.ap.availableForProyects,
          avatar:  pimage,
        }

        userService.addUser(newUser);

        userAprCtrl.ap.name = null;
        userAprCtrl.ap.surname = null;
        userAprCtrl.ap.secondSurname = null;
        userAprCtrl.ap.id = null;
        userAprCtrl.ap.specialty = null;
        userAprCtrl.ap.mail = null;
        userAprCtrl.ap.password = null;
        userAprCtrl.ap.councilMember = null;
        userAprCtrl.ap.availableForProyects = null;
        userAprCtrl.ap.image = null;

        userAprCtrl.send = true;
        userAprCtrl.toSend = false;
      }

      userAprCtrl.preSaveAs = function(){
        userAprCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAprCtrl.cloudObj)
          .success(function(data){
            userAprCtrl.saveAs(data.url);
          });
      }


      userAprCtrl.saveAs = function(pimage){
        var newUserAssistant ={
          key : 3,
          role : "asistente",
          name : userAprCtrl.asis.name,
          surname : userAprCtrl.asis.surname,
          secondSurname : userAprCtrl.asis.secondSurname,
          id : userAprCtrl.asis.id,
          mail : userAprCtrl.asis.mail,
          password : userAprCtrl.asis.password,
          jobPosition : userAprCtrl.asis.jobPosition,
          phone : userAprCtrl.asis.phone,
          avatar:  pimage
        }


    //"puestoUniversitario":"", CAMBIARLO EN DATA



        userService.addUser(newUserAssistant);

        userAprCtrl.asis.name = null;
        userAprCtrl.asis.surname = null;
        userAprCtrl.asis.secondSurname = null;
        userAprCtrl.asis.id = null;
        userAprCtrl.asis.mail = null;
        userAprCtrl.asis.password = null;
        userAprCtrl.asis.jobPosition = null;
        userAprCtrl.asis.phone = null;
        userAprCtrl.asis.image = null;
      }





      userAprCtrl.deleteUser = function (id) {
        console.log(id);
        userService.deleteUser(id);
      }


     userAprCtrl.viewProf= function(id){
        userAprCtrl.edit.modal=true;
        userAprCtrl.editProf = id; 
      }

     userAprCtrl.preModify = function () {
      var prof = userAprCtrl.prof.id;
      console.log(prof);

      var listaProfesor = userService.getUsers();
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
          specialty : userAprCtrl.edit.specialty,
          mail : listaProfesor[i].mail,
          password : listaProfesor[i].password,
          councilMember : userAprCtrl.edit.councilMember,
          availableForProyects : userAprCtrl.edit.availableForProyects,
          avatar:  listaProfesor[i].avatar
        }

        newUserProfessor.push(newUserProfessorEdited);
        }else {
        newUserProfessor.push(listaProfesor[i]);
        }
      }
      userService.updateUser(newUserProfessor);
  }
}
  
})();



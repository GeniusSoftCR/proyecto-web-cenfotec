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


      $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});

      userAprCtrl.userList = [];
      
      userAprCtrl.userList = userService.getUsers();

      userAprCtrl.rejection=false;
      userAprCtrl.edit.modal=false;

      userAprCtrl.send = false;
      userAprCtrl.toSend = true;


      //Guarda los datos del Profesor

      userAprCtrl.preSaveProf = function(){
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
        var newUserProf ={
          role_key: 2,
          name : userAprCtrl.prof.name,
          surname : userAprCtrl.prof.surname,
          secondSurname : userAprCtrl.prof.secondSurname,
          id : userAprCtrl.prof.id,
          specialty : userAprCtrl.prof.specialty,
          mail : userAprCtrl.prof.mail,
          password : userAprCtrl.prof.password,
          councilMember : userAprCtrl.prof.councilMember,
          avatar:  pimage
        }

        userService.addUser(newUserProf);

        userAprCtrl.prof.name = null;
        userAprCtrl.prof.surname = null;
        userAprCtrl.prof.secondSurname = null;
        userAprCtrl.prof.id = null;
        userAprCtrl.prof.specialty = null;
        userAprCtrl.prof.mail = null;
        userAprCtrl.prof.password = null;
        userAprCtrl.prof.councilMember = null;
        userAprCtrl.prof.image = null;

        userAprCtrl.send = true;
        userAprCtrl.toSend = false;
      }

      //Guarda los datos del Administrador
      userAprCtrl.preSaveAdmi = function(){
        userAprCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAprCtrl.cloudObj)
          .success(function(data){
            userAprCtrl.saveAdmi(data.url);
          });
      }


      userAprCtrl.saveAdmi = function(pimage){
        var newUserAdmi ={
          role_key: 1,
          name : userAprCtrl.admi.name,
          surname : userAprCtrl.admi.surname,
          secondSurname : userAprCtrl.admi.secondSurname,
          id : userAprCtrl.admi.id,
          mail : userAprCtrl.admi.mail,
          password : userAprCtrl.admi.password,
          jobPosition : userAprCtrl.admi.jobPosition,
          councilMember : userAprCtrl.admi.councilMember,
          phone : userAprCtrl.admi.phone,
          avatar:  pimage
        }

        userService.addUser(newUserAdmi);

        userAprCtrl.admi.name = null;
        userAprCtrl.admi.surname = null;
        userAprCtrl.admi.secondSurname = null;
        userAprCtrl.admi.id = null;
        userAprCtrl.admi.mail = null;
        userAprCtrl.admi.password = null;
        userAprCtrl.admi.jobPosition = null;
        userAprCtrl.admi.councilMember = null;
        userAprCtrl.admi.phone = null;
        userAprCtrl.admi.image = null;

        userAprCtrl.send = true;
        userAprCtrl.toSend = false;
      }

      //Guarda los datos del Asistente
      userAprCtrl.preSaveAs = function(){
        userAprCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAprCtrl.cloudObj)
          .success(function(data){
            userAprCtrl.saveAs(data.url);
          });
      }


      userAprCtrl.saveAs = function(pimage){
        var newUserAssistant ={
          role_key: 3,
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




/*
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
  }*/
}
  
})();



(function(){
  angular
    .module('cshApp')
    .controller('userApController', userApController);

    userApController.$inject = ['userService','ImageService','Upload','localStorageService'];

    function userApController(userService,ImageService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.cloudObj = ImageService.getConfiguration();
      vm.ap = {};
      vm.edit = {};
      vm.asis = {};


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

      vm.userList = [];
      
      vm.userList = userService.getUsers();

      vm.rejection=false;
      vm.edit.modal=false;

      vm.send = false;
      vm.toSend = true;


      //Guarda los datos del Profesor

      vm.preSaveProf = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.save(data.url,key);
          });
      }

      vm.save = function(pimage,pkey){
        var newUserProf ={
          role_key: 2,
          name : vm.prof.name,
          surname : vm.prof.surname,
          secondSurname : vm.prof.secondSurname,
          id : vm.prof.id,
          specialty : vm.prof.specialty,
          mail : vm.prof.mail,
          password : vm.prof.password,
          councilMember : vm.prof.councilMember,
          avatar:  pimage
        }

        userService.addUser(newUserProf);

        vm.prof.name = null;
        vm.prof.surname = null;
        vm.prof.secondSurname = null;
        vm.prof.id = null;
        vm.prof.specialty = null;
        vm.prof.mail = null;
        vm.prof.password = null;
        vm.prof.councilMember = null;
        vm.prof.image = null;

        vm.send = true;
        vm.toSend = false;
      }

      //Guarda los datos del Administrador
      vm.preSaveAdmi = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.saveAdmi(data.url);
          });
      }


      vm.saveAdmi = function(pimage){
        var newUserAdmi ={
          role_key: 1,
          name : vm.admi.name,
          surname : vm.admi.surname,
          secondSurname : vm.admi.secondSurname,
          id : vm.admi.id,
          mail : vm.admi.mail,
          password : vm.admi.password,
          jobPosition : vm.admi.jobPosition,
          councilMember : vm.admi.councilMember,
          phone : vm.admi.phone,
          avatar:  pimage
        }

        userService.addUser(newUserAdmi);

        vm.admi.name = null;
        vm.admi.surname = null;
        vm.admi.secondSurname = null;
        vm.admi.id = null;
        vm.admi.mail = null;
        vm.admi.password = null;
        vm.admi.jobPosition = null;
        vm.admi.councilMember = null;
        vm.admi.phone = null;
        vm.admi.image = null;

        vm.send = true;
        vm.toSend = false;
      }

      //Guarda los datos del Asistente
      vm.preSaveAs = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.saveAs(data.url);
          });
      }


      vm.saveAs = function(pimage){
        var newUserAssistant ={
          role_key: 3,
          name : vm.asis.name,
          surname : vm.asis.surname,
          secondSurname : vm.asis.secondSurname,
          id : vm.asis.id,
          mail : vm.asis.mail,
          password : vm.asis.password,
          jobPosition : vm.asis.jobPosition,
          phone : vm.asis.phone,
          avatar:  pimage
        }

        userService.addUser(newUserAssistant);

        vm.asis.name = null;
        vm.asis.surname = null;
        vm.asis.secondSurname = null;
        vm.asis.id = null;
        vm.asis.mail = null;
        vm.asis.password = null;
        vm.asis.jobPosition = null;
        vm.asis.phone = null;
        vm.asis.image = null;
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



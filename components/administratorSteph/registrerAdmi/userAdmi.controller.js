(function(){
  angular
    .module('cshApp')
    .controller('userAdmiController', userAdmiController);

    userAdmiController.$inject = ['userAdmiService','ImageService','Upload','localStorageService'];

    function userAdmiController(userAdmiService,ImageService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userAdmiCtrl = this; //binding del controlador con el html, solo en el controlador
      userAdmiCtrl.cloudObj = ImageService.getConfiguration();
      userAdmiCtrl.admi = {};
      userAdmiCtrl.edit = {};

      userAdmiCtrl.userAdmiList = [];
      
      userAdmiCtrl.userAdmiList = userAdmiService.getAdmis();

      userAdmiCtrl.rejection=false;
      userAdmiCtrl.edit.modal=false;


      userAdmiCtrl.preSave = function(){
        userAdmiCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAdmiCtrl.cloudObj)
          .success(function(data){
            userAdmiCtrl.saveP(data.url);
          });
      }

      userAdmiCtrl.saveP = function(pimage){
        var newUserAdmi ={
          key : 1,
          role : "admin",
          name : userAdmiCtrl.admi.name,
          surname : userAdmiCtrl.admi.surname,
          secondSurname : userAdmiCtrl.admi.secondSurname,
          id : userAdmiCtrl.admi.id,
          specialty : userAdmiCtrl.admi.specialty,
          mail : userAdmiCtrl.admi.mail,
          password : userAdmiCtrl.admi.password,
          councilMember : userAdmiCtrl.admi.councilMember,
          availableForProyects : userAdmiCtrl.admi.availableForProyects,
          avatar:  pimage,
        }

        userAdmiService.addAdmi(newUserAdmi);

        userAdmiCtrl.admi.name = null;
        userAdmiCtrl.admi.surname = null;
        userAdmiCtrl.admi.secondSurname = null;
        userAdmiCtrl.admi.id = null;
        userAdmiCtrl.admi.specialty = null;
        userAdmiCtrl.admi.mail = null;
        userAdmiCtrl.admi.password = null;
        userAdmiCtrl.admi.councilMember = null;
        userAdmiCtrl.admi.availableForProyects = null;
        userAdmiCtrl.admi.image = null;
      }

      userAdmiCtrl.deleteAdmi = function (index) {
        console.log(index);
        userAdmiService.deleteAdmi(index);
      }


     userAdmiCtrl.viewAdmi= function(index){
        userAdmiCtrl.edit.modal=true;
        userAdmiCtrl.editAdmi = index; 
      }

     userAdmiCtrl.preModify = function () {
      var admi = userAdmiCtrl.admi.id;
      console.log(admi);

      var listaAdmi = userAdmiService.getAdmis();
      var newUserAdmi = [];

      for (var i = 0; i < listaAdmi.length; i++) {
        var idAdmi = listaAdmi[i].id;

        if (idAdmi == admi) {


         var newUserAdmiEdited ={
          key : 1,
          role : "admin",
          name : listaAdmi[i].name,
          surname : listaAdmi[i].surname,
          secondSurname : listaAdmi[i].secondSurname,
          id : listaAdmi[i].id,
          specialty : userAdmiCtrl.edit.specialty,
          mail : listaAdmi[i].mail,
          password : listaAdmi[i].password,
          councilMember : userAdmiCtrl.edit.councilMember,
          availableForProyects : userAdmiCtrl.edit.availableForProyects,
          avatar:  listaAdmi[i].avatar
        }

        newUserAdmi.push(newUserAdmiEdited);
        }else {
        newUserAdmi.push(listaAdmi[i]);
        }
      }
      userAdmiService.setLocalAdmiEdited(newUserAdmi);
  }
}
  
})();



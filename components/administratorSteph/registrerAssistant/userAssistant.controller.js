(function(){
  angular
    .module('cshApp')
    .controller('userAssistantController',userAssistantController);

    userAssistantController.$inject = ['userAsistService','ImageService','Upload','localStorageService'];

    function userAssistantController(userAsistService,ImageService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userAssistantCtrl = this; //binding del controlador con el html, solo en el controlador
      userAssistantCtrl.cloudObj = ImageService.getConfiguration();
      userAssistantCtrl.asis = {};
      userAssistantCtrl.edit = {};

      userAssistantCtrl.userAssistantList = [];
      
      userAssistantCtrl.userAssistantList = userAsistService.getAssistants();

      userAssistantCtrl.rejection=false;
      userAssistantCtrl.edit.modal=false;


      userAssistantCtrl.preSave = function(){
        userAssistantCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAssistantCtrl.cloudObj)
          .success(function(data){
            userAssistantCtrl.saveP(data.url);
          });
      }

      userAssistantCtrl.saveP = function(pimage){
        var newUserAssistant ={
          key : 3,
          role_key : "assistant",
          name : userAssistantCtrl.asis.name,
          surname : userAssistantCtrl.asis.surname,
          secondSurname : userAssistantCtrl.asis.secondSurname,
          id : userAssistantCtrl.asis.id,
          mail : userAssistantCtrl.asis.mail,
          password : userAssistantCtrl.asis.password,
          jobPosition : userAssistantCtrl.asis.jobPosition,
          phone : userAssistantCtrl.asis.phone,
          avatar:  pimage
        }


    //"puestoUniversitario":"", CAMBIARLO EN DATA



        userAsistService.addAssistant(newUserAssistant);

        userAssistantCtrl.asis.name = null;
        userAssistantCtrl.asis.surname = null;
        userAssistantCtrl.asis.secondSurname = null;
        userAssistantCtrl.asis.id = null;
        userAssistantCtrl.asis.mail = null;
        userAssistantCtrl.asis.password = null;
        userAssistantCtrl.asis.jobPosition = null;
        userAssistantCtrl.asis.phone = null;
        userAssistantCtrl.asis.image = null;
      }

      userAssistantCtrl.deleteAssit = function (index) {
        console.log(index);
        userAsistService.deleteProfessor(index);
      }


     userAssistantCtrl.viewAsis= function(index){
        userAssistantCtrl.edit.modal=true;
        userAssistantCtrl.editAsis = index; 
      }

     userAssistantCtrl.preModify = function () {
      var asist = userAssistantCtrl.asis.id;
      console.log(asist);

      var listaAssistant = userAsistService.getAssistants();
      var newUserAssistant = [];

      for (var i = 0; i < listaAssistant.length; i++) {
        var idAssistant = listaAssistant[i].id;

        if (idAssistant == asist) {


         var newUserAssistantEdited ={
          key : 3,
          role_key : "assistant",
          name : listaAssistant[i].name,
          surname : listaAssistant[i].surname,
          secondSurname : listaAssistant[i].secondSurname,
          id : listaAssistant[i].id,
          mail : listaAssistant[i].mail,
          password : listaAssistant[i].password,
          jobPosition : userAssistantCtrl.edit.jobPosition,
          phone : userAssistantCtrl.edit.phone,
          avatar:  listaAssistant[i].avatar
        }

        newUserAssistant.push(newUserAssistantEdited);
        }else {
        newUserAssistant.push(listaAssistant[i]);
        }
      }
      userAsistService.setLocalAsistfEdited(newUserAssistant);
  }
}
  
})();
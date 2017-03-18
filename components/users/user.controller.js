(function(){
  angular
    .module('cshApp')
    .controller('userController', userController);
    function userController(userService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        userCtrl.userList = userService.getUser();
      }
      init();

      userCtrl.preSave = function(){
        userCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userCtrl.cloudObj)
          .success(function(data){
            userCtrl.save(data.url);
          });
      }

      userCtrl.save= function(pimage){
        var newUser ={
          name : userCtrl.name,
          lastName : userCtrl.lastName,
          surName : userCtrl.surName,
          specialty : userCtrl.specialty,
          email : userCtrl.email,
          password : userCtrl.password,
          consejo : userCtrl.consejo,
          rol : userCtrl.rol,
          avatar:  pimage
        }

        userService.addUser(newUser);

        userCtrl.name = null;
        userCtrl.lastName = null;
        userCtrl.surName = null;
        userCtrl.specialty = null;
        userCtrl.email = null;
        userCtrl.password = null;
        userCtrl.consejo = null;
        userCtrl.rol = null;
        userCtrl.image = null;
      }
/*
        userCtrl.editarUser = function(){
        var userList = userCtrl.userList;
        var select = userCtrl.userEdit.nombre;
        
        for (var i = 0; i < userList.length; i++) {
            var name = userList[i].nombre;
              if (name == select) {
                userCtrl.name = userList[i].name
                ,
                userCtrl.lastName = userList[i].lastName;
                userCtrl.surName = userList[i].surName;
                userCtrl.specialty = userList[i].specialty;
                userCtrl.email = userList[i].email;
                userCtrl.password = userList[i].password;
                userCtrl.consejo = userList[i].consejo;
                userCtrl.rol = userList[i].rol;
          }
        }
      }

    userCtrl.confirmarEditarActor = function(){
        var campoNombre = userCtrl;
        var campoPrimerApellido = userCtrl.premioEdit;
        var campoSegundoApellido = userCtrl.premioEdit;
        var campoEspecialidad = userCtrl.premioEdit;
        var campoEmail = userCtrl.premioEdit;
        var campoPassword = userCtrl.premioEdit;
        var campoConsejo = userCtrl.premioEdit;
        var campoRol = userCtrl.premioEdit; 
        var indiceActor = userCtrl.actorEditar.$$mdSelectId;
        var userList = userCtrl.userList;
        var User = [];

        for (var i = 0; i < userList.length; i++) {
          var indiceLista = i+1;
          if (indiceLista == indiceActor) {
            var newUser ={
              nombre : campoNombre,
              premio : campoPremio,
              image : campoImagen
            }
            User.push(newUser);
          }
          else{
              User.push(userList[i]);
            }
        }
        userService.setLocal(User);
      }

    }

*/
 }
})()
/*
      userCtrl.deleteUser = function(){
              // do something on click
        var userList = userCtrl.userList;
        var select = userCtrl.userDelete.nombre;

        for (var i = 0; i < userList.length; i++) {
          var nombreActor = userList[i].nombre;
          if (nombreActor == select) {
            userList.splice(i);
            userService.setLocal(userList);
          }
        }
      }

 
     //se establece un objeto de angular normal
})()*/
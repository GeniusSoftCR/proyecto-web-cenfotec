(function(){
  angular
    .module('ProjectApp')
    .controller('studentController', studentController);
    function studentController(studentService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var studentCtrl = this; //binding del controlador con el html, solo en el controlador
     studentCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        studentCtrl.//actorList = studentService.getStudent(); que lista es la que se pone?
      }
      init();

      studentCtrl.preSave = function(){
        studentCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(studentCtrl.cloudObj)
          .success(function(data){
            studentCtrl.save(data.url);
          });
      }

      studentCtrl.preEdit = function(){
        studentCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(studentCtrl.cloudObj)
          .success(function(data){
            studentCtrl.confirmarEditarActor(data.url);
          });
      }

      studentCtrl.save= function(pimage){
        var newActor ={
          nombre : studentCtrl.nombreActor,
          premio : studentCtrl.premio,
          image: pimage
        }

        actorService.addActor(newActor);

        studentCtrl.nombreActor = null;
        studentCtrl.premio = null;
        studentCtrl.imagenActor = null;


      }

      studentCtrl.borrarActor = function(){
              // do something on click
        var listaActor = studentCtrl.actorList;
        var select = studentCtrl.studenteEliminar.nombre;

        for (var i = 0; i < listaActor.length; i++) {
          var nombreActor = listaActor[i].nombre;
          if (nombreActor == select) {
            listaActor.splice(i);
            actorService.setLocal(listaActor);
          }
        }
      }

      studentCtrl.editarActor = function(){
        var listaActor = studentCtrl.actorList;
        var select = studentCtrl.actorEditar.nombre;
        
        for (var i = 0; i < listaActor.length; i++) {
            var nombreAct = listaActor[i].nombre;
              if (nombreAct == select) {
                studentCtrl.nombreActorEdit = listaActor[i].nombre,
                studentCtrl.premioEdit = listaActor[i].premio;
                studentCtrl.imagenActor = listaActor[i].image;
          }
        }
      }

    studentCtrl.confirmarEditarActor = function(pImagenEdit){
        var listaActor = studentCtrl.actorList;
        var campoNombre = studentCtrl.nombreActorEdit;
        var campoPremio = studentCtrl.premioEdit;
        var campoImagen = pImagenEdit;
        var indiceActor = studentCtrl.actorEditar.$$mdSelectId;
        var Actor = [];

        for (var i = 0; i < listaActor.length; i++) {
          var indiceLista = i+1;
          if (indiceLista == indiceActor) {
            var newActor ={
              nombre : campoNombre,
              premio : campoPremio,
              image : campoImagen
            }
            Actor.push(newActor);
          }
          else{
              Actor.push(listaActor[i]);
            }
        }
        actorService.setLocal(Actor);
      }

    }
     //se establece un objeto de angular normal
})()
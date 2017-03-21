(function(){
  angular
    .module('cshApp')
    .controller('userAssistantController', userAssistantController);

    userAssistantController.$inject = ['userAsistService','ImageService','Upload'];

    function userAssistantController(userAsistService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userAsistCtrl = this; //binding del controlador con el html, solo en el controlador
      userAsistCtrl.cloudObj = ImageService.getConfiguration();
      userAsistCtrl.asist = {};
      userAsistCtrl.editA = {};

      userAsistCtrl.userAsistList = [];
      
      userAsistCtrl.userProfessorList = userProfessorService.getAssitant();
      


      userAsistCtrl.rejection=false;
      userAsistCtrl.modal=false;

      userAsistCtrl.preSave = function(){
        userAsistCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userAsistCtrl.cloudObj)
          .success(function(data){
            userAsistCtrl.save(data.url);
          });
      }

      userAsistCtrl.save= function(pimage){
        var newUserAsist ={
          name : userAsistCtrl.asist.name,
          lastName : userAsistCtrl.asist.lastName,
          surName : userAsistCtrl.asist.surName,
          email : userAsistCtrl.asist.email,
          password : userAsistCtrl.asist.password,
          jobposition : userAsistCtrl.asist.jobposition,
          avatar:  pimage
        }

        userProfessorService.addAssistant(newUserAsist);

        userAsistCtrl.asist.name = null;
        userAsistCtrl.asist.lastName = null;
        userAsistCtrl.asist.surName = null;
        userAsistCtrl.asist.specialty = null;
        userAsistCtrl.asist.email = null;
        userAsistCtrl.asist.password = null;
        userAsistCtrl.asist.jobposition = null;
        userAsistCtrl.asist.image = null;
      }

      userAsistCtrl.deleteProf = function (index) {
        console.log(index);
        userProfessorService.deleteProfessor(index);
      }

      userAsistCtrl.editProf = function (index,name){
        userAsistCtrl.edit.modal=true;
        userAsistCtrl.edit.index=index;       
        userAsistCtrl.edit.name=name;       
     }

     userAsistCtrl.preModify = function (index) {
        var profItem = userAsistCtrl.professors[index];
        var itemProfChange = {

          specialty : userAsistCtrl.edit.specialty,
          consejo : userAsistCtrl.edit.consejo,
          hability : userAsistCtrl.edit.hability,
          avatar:  pimage
        }


       userAsistCtrl.updateProfesor(itemProfChange,index);
      }

      //.splice(index, 0, objeto)

  }
})()
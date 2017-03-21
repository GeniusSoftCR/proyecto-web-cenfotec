(function(){
  angular
    .module('cshApp')
    .controller('userProfessorController', userProfessorController);

    userProfessorController.$inject = ['userProfessorService','ImageService','Upload'];

    function userProfessorController(userProfessorService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userProfessorCtrl = this; //binding del controlador con el html, solo en el controlador
      userProfessorCtrl.cloudObj = ImageService.getConfiguration();
      userProfessorCtrl.prof = {};
      userProfessorCtrl.edit = {};

      userProfessorCtrl.userProfessorList = [
        {name: "Hector", lastName: "Orksd", surName: "tht", specialty: "hth", email: 'ffd@gmail.com'}
      ];
      
      
      userProfessorCtrl.userProfessorList = userProfessorService.getProfessors();
      


      userProfessorCtrl.rejection=false;
      userProfessorCtrl.modal=false;

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
          hability : userProfessorCtrl.prof.hability,
          avatar:  pimage,
          user_key : 2
        }

        userProfessorService.addProfessor(newUserProfessor);

        userProfessorCtrl.prof.name = null;
        userProfessorCtrl.prof.lastName = null;
        userProfessorCtrl.prof.surName = null;
        userProfessorCtrl.prof.specialty = null;
        userProfessorCtrl.prof.email = null;
        userProfessorCtrl.prof.password = null;
        userProfessorCtrl.prof.consejo = null;
        userProfessorCtrl.prof.hability = null;
        userProfessorCtrl.prof.image = null;
      }

      userProfessorCtrl.deleteProf = function (index) {
        console.log(index);
        userProfessorService.deleteProfessor(index);
      }

      userProfessorCtrl.editProf = function (index,name){
        userProfessorCtrl.edit.modal=true;
        userProfessorCtrl.edit.index=index;       
        userProfessorCtrl.edit.name=name;       
     }

     userProfessorCtrl.preModify = function (index) {
        var profItem = userProfessorCtrl.professors[index];
        var itemProfChange = {

          specialty : userProfessorCtrl.edit.specialty,
          consejo : userProfessorCtrl.edit.consejo,
          hability : userProfessorCtrl.edit.hability,
          avatar:  pimage
        }


       userProfessorCtrl.updateProfesor(itemProfChange,index);
      }

      //.splice(index, 0, objeto)

  }
})()
(function(){
  angular
    .module('cshApp')
    .controller('userApController', userApController);

    userApController.$inject = ['userService','ImageService','Upload','localStorageService'];

    function userApController(userService,ImageService,Upload, localStorageService){

      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.cloudObj = ImageService.getConfiguration();
      vm.prof = {};
      vm.send = false;
      vm.toSend = true;

      //Muestra el formualrio en cada casilla
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

      //En el input de Avatar muestra al lado de escoger, la imagen que se ha seleccionado
        $(function() {
            $(document).on('change', ':file', function() {
              var input = $(this),
                  numFiles = input.get(0).files ? input.get(0).files.length : 1,
                  label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
              input.trigger('fileselect', [numFiles, label]);
            });

            $(document).ready( function() {
                $(':file').on('fileselect', function(event, numFiles, label) {

                    var input = $(this).parents('.input-group').find(':text'),
                        log = numFiles > 1 ? numFiles + ' files selected' : label;

                    if( input.length ) {
                        input.val(log);
                    } else {
                        if( log ) alert(log);
                    }
                });
            });
          });
        //fin de mostrar avatar

        //Guarda los datos del Profesor

      vm.preSaveProf = function(){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.save(data.url);
          });
      }

      vm.save = function(pimage){
        var newUserProf ={
          idNum : vm.prof.id,
          name : vm.prof.name,
          surname : vm.prof.surName,
          secondSurname : vm.prof.secondSurname,
          email : vm.prof.email,
          phone : vm.prof.phone,
          councilMember : vm.prof.councilMember,
          avatar : pimage,
          password : vm.prof.password,
          state: null,
          role: 'professor',
         specialty : vm.prof.specialty
        };

        console.log(newUserProf);
        //envia el usuario al user.service
        userService.addUser(newUserProf).then(function(res){
              console.log(res)
          });

        vm.prof.idNum = null;
        vm.prof.name = null;
        vm.prof.surname = null;
        vm.prof.secondSurname = null;
        vm.prof.email = null;
        vm.prof.phone = null;
        vm.prof.image = null;
        vm.prof.password = null;
        vm.prof.specialty = null;
        vm.send = true;
        vm.toSend = false;
      };
    }
})();
      
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
        };

        console.log(newUserAssistant);
        //envia el usuario al user.service
        userService.addUser(newUserAssistant).then(function(res){
              console.log(res);
          });

        vm.asis.name = null;
        vm.asis.surname = null;
        vm.asis.secondSurname = null;
        vm.asis.id = null;
        vm.asis.mail = null;
        vm.asis.password = null;
        vm.asis.jobPosition = null;
        vm.asis.phone = null;
        vm.asis.image = null;
      };

      


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
  }
*/




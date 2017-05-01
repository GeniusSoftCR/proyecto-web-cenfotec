/*IMPORTANTE TRAER EL ID DEL PROYECTO POR LA URL Y NO QUEMARLO!!!*/
(function(){
  angular
    .module('cshApp')
    .controller('filesController', filesController);
    
    filesController.$inject = ['filepickerService'];

    function filesController(filepickerService){
      
      var vm = this;
      /*setea el id del proyecto actual: DEBE VENIR DE LA URL*/
      vm.projectID = 1;
      //2)copiará la lista de archivos del proyecto actual*
      vm.projectFiles = [];
      //archivo específico a borrar
      vm.file = {};

      /*ACTUALIZAR LISTA DE ARCHIVOS*/
      vm.loadProjectFiles= function(){
        //1)trae la lista con todos los proyectos
        //vm.projectsList = filesService.getProjects();

        //recorre el arreglo de proyectos
        for(i = 0; i < vm.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(vm.projectsList[i].id==vm.projectID){
            //2)copia la lista de archivos del proyecto actual*
            vm.projectFiles=vm.projectsList[i].files;
          }
        }

      }
      vm.loadProjectFiles();

      //Inicio: Manejo de archivos
      vm.pickFile = pickFile;
      vm.onSuccess = onSuccess;
      function pickFile(){
        filepickerService.pick(
          {extension:'.pdf',
          language: 'es',
          container: 'modal',
          services: ['COMPUTER']},onSuccess
        );
      };
      function onSuccess(Blob){
        vm.fileName = Blob.filename;
        vm.fileUrl = Blob.url;
      };
      //Fin: Manejo de archivos

      /*AGREGAR ARCHIVO*/
      vm.addNewFile= function(){
        pickFile();
        //1)crea un objeto para el nuevo archivo
        var newFile = {name:vm.fileName,url:vm.fileUrl};
        //2)agrega el objeto a la lista de archivos(temporal)
        vm.projectFiles.push(newFile);

        //recorre el arreglo de proyectos
        for(i = 0; i < vm.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(vm.projectsList[i].id==vm.projectID){
            //3)actualiza la lista de archivos en el proyecto actual
            vm.projectsList[i].files=vm.projectFiles;
            //4)persiste los cambios en el localStorage
            //filesService.setProjects(vm.projectsList);
          }
        }

        //refresca la lista de archivos
        vm.loadProjectFiles();
      }

      /*ELIMINAR ARCHIVO*/
      vm.removeFile= function(file){
        vm.file = file;
        alert(file.name);
        var position = null;
        //busca el index del archivo
        angular.forEach(vm.projectFiles, function(pfile,index) {
          if (pfile.url === vm.file.url) {
            position = index;
          }
        });
        //borra el archivo de la lista de archivos
        vm.projectFiles.splice(position,1);
        
        //recorre el arreglo de proyectos
        for(i = 0; i < vm.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(vm.projectsList[i].id==vm.projectID){
            //3)actualiza la lista de archivos en el proyecto actual
            vm.projectsList[i].files=vm.projectFiles;
            //4)persiste los cambios en el localStorage
            //filesService.setProjects(vm.projectsList);
          }
        }

        //refresca la lista de archivos
        vm.loadProjectFiles();
      }

    }//fin del objeto de angular

})();

/*IMPORTANTE TRAER EL ID DEL PROYECTO POR LA URL Y NO QUEMARLO!!!*/
(function(){
  angular
    .module('cshApp')
    .controller('filesController', filesController);
    
    filesController.$inject = ['filesService','filepickerService'];

    function filesController(filesService,filepickerService){
      
      var filesCtrl = this;
      /*setea el id del proyecto actual: DEBE VENIR DE LA URL*/
      filesCtrl.projectID = 1;
      //2)copiará la lista de archivos del proyecto actual*
      filesCtrl.projectFiles = [];
      //archivo específico a borrar
      filesCtrl.file = {};

      /*ACTUALIZAR LISTA DE ARCHIVOS*/
      filesCtrl.loadProjectFiles= function(){
        //1)trae la lista con todos los proyectos
        filesCtrl.projectsList = filesService.getProjects();

        //recorre el arreglo de proyectos
        for(i = 0; i < filesCtrl.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(filesCtrl.projectsList[i].id==filesCtrl.projectID){
            //2)copia la lista de archivos del proyecto actual*
            filesCtrl.projectFiles=filesCtrl.projectsList[i].files;
          }
        }

      }
      filesCtrl.loadProjectFiles();

      //Inicio: Manejo de archivos
      filesCtrl.pickFile = pickFile;
      filesCtrl.onSuccess = onSuccess;
      function pickFile(){
        filepickerService.pick(
          {extension:'.pdf',
          language: 'es',
          container: 'modal',
          services: ['COMPUTER']},onSuccess
        );
      };
      function onSuccess(Blob){
        filesCtrl.fileName = Blob.filename;
        filesCtrl.fileUrl = Blob.url;
      };
      //Fin: Manejo de archivos

      /*AGREGAR ARCHIVO*/
      filesCtrl.addNewFile= function(){
        pickFile();
        //1)crea un objeto para el nuevo archivo
        var newFile = {name:filesCtrl.fileName,url:filesCtrl.fileUrl};
        //2)agrega el objeto a la lista de archivos(temporal)
        filesCtrl.projectFiles.push(newFile);

        //recorre el arreglo de proyectos
        for(i = 0; i < filesCtrl.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(filesCtrl.projectsList[i].id==filesCtrl.projectID){
            //3)actualiza la lista de archivos en el proyecto actual
            filesCtrl.projectsList[i].files=filesCtrl.projectFiles;
            //4)persiste los cambios en el localStorage
            filesService.setProjects(filesCtrl.projectsList);
          }
        }

        //refresca la lista de archivos
        filesCtrl.loadProjectFiles();
      }

      /*ELIMINAR ARCHIVO*/
      filesCtrl.removeFile= function(file){
        filesCtrl.file = file;
        alert(file.name);
        var position = null;
        //busca el index del archivo
        angular.forEach(filesCtrl.projectFiles, function(pfile,index) {
          if (pfile.url === filesCtrl.file.url) {
            position = index;
          }
        });
        //borra el archivo de la lista de archivos
        filesCtrl.projectFiles.splice(position,1);
        
        //recorre el arreglo de proyectos
        for(i = 0; i < filesCtrl.projectsList.length; i++){
          //se posiciona en el proyecto actual
          if(filesCtrl.projectsList[i].id==filesCtrl.projectID){
            //3)actualiza la lista de archivos en el proyecto actual
            filesCtrl.projectsList[i].files=filesCtrl.projectFiles;
            //4)persiste los cambios en el localStorage
            filesService.setProjects(filesCtrl.projectsList);
          }
        }

        //refresca la lista de archivos
        filesCtrl.loadProjectFiles();
      }

    }//fin del objeto de angular

})();

/*NOTA: cada vez que refresque la pagina el localStorage se va a sobreescribir en la linea 16*/
(function(){
  angular
  .module('cshApp')
  .service('filesService', filesService);

  filesService.$inject = ['$http','localStorageService'];

  function filesService($http,localStorageService){

    var publicAPI = {
      getProjects : _getProjects,
      setProjects : _setProjects
    };
    return publicAPI;

    //devuelve la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        projectsList = [];
      }else{
        projectsList = storedList;
      }
      return projectsList;
    }

    function _setProjects(projectsList){
      console.log(projectsList);
      localStorageService.set('localProjectsList', projectsList);
    }

    // function localStorageProjectsList(jlist){
    //   console.log(jlist);
    //   localStorageService.set('localProjectsList', jlist);
    // }
  }
})();
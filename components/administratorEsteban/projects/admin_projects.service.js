(function(){
  angular
  .module('cshApp')
  .service('admin_loadProjectsService', admin_loadProjectsService);

  admin_loadProjectsService.$inject = ['$http', 'localStorageService'];

  function admin_loadProjectsService($http,localStorageService){
    var publicAPI = {
      getProjectsStates : _getProjectStates,
      getProjects : _getProjects
    };
    return publicAPI;

    //trae la lista de estados de proyectos
    function _getProjectStates(){
      var storedList = localStorageService.get('localProjectsStatesList');
      if(storedList == null){
        projectsStatesList = [];
      }else{
        projectsStatesList = storedList;
      }
      return projectsStatesList;
    }
    //trae la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        projectsList = [];
      }else{
        projectsList = storedList;
      }
      return projectsList;
    }

  	// //Persistencia de los datos
   //  function localStorageProjectsStatesList(jlist){
   //    localStorageService.set('localProjectsStatesList', JSON.stringify(jlist));
   //  }
   //  function localStorageProjectsList(jlist){
   //    localStorageService.set('localProjectsList', JSON.stringify(jlist));
   //  }
  }

})();

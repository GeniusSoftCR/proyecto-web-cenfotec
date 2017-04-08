(function(){
  angular
  .module('cshApp')
  .service('asis_loadProjectsService', asis_loadProjectsService);

  asis_loadProjectsService.$inject = ['$http', 'localStorageService'];

  function asis_loadProjectsService($http,localStorageService){

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
        projectsStatesList = JSON.parse(storedList);
      }
      return projectsStatesList;
    }
    //trae la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        projectsList = [];
      }else{
        projectsList = JSON.parse(storedList);
      }
      return projectsList;
    }

  }

})();

(function(){
  angular
  .module('cshApp')
  .service('teacher_loadProjectsService', teacher_loadProjectsService);

  teacher_loadProjectsService.$inject = ['$http', 'localStorageService'];

  function teacher_loadProjectsService($http,localStorageService){

    var publicAPI = {
      getProjects : _getProjects
    };
    return publicAPI;

    //devuelve la lista de proyectos
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

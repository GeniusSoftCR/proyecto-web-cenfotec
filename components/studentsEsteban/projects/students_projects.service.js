(function(){
  angular
  .module('cshApp')
  .service('student_loadProjectsService', student_loadProjectsService);

  student_loadProjectsService.$inject = ['$http', 'localStorageService'];

  function student_loadProjectsService($http,localStorageService){

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

(function(){
  angular
  .module('cshApp')
  .service('projectRequestsService', projectRequestsService);

  projectRequestsService.$inject = ['$http', 'localStorageService'];

  function projectRequestsService($http,localStorageService){
    
    var publicAPI = {
      getRequests : _getProjects,
      changeRequestState : _changeProjectsState
    };
    return publicAPI;

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

    //cambia el estado a aprobado o rechazado según el parámetro
    function _changeProjectsState(request,newState){
      request.state_key=newState;
      var index = null;
      angular.forEach(projectsList, function(student, position) {
        if (student.mail === request.mail) {
          index = position;
        }
      });
      projectsList[index]=request;
      localStorageStudentsList(projectsList);
    }
    //inserta los nuevos registros al localStorage
    function localStorageStudentsList(jlist){
      localStorageService.set('localProjectsList', jlist);
    }

  }

})();
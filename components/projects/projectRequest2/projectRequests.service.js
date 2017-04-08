(function(){
  angular
  .module('cshApp')
  .service('projectRequestsService', projectRequestsService);

  projectRequestsService.$inject = ['$http','localStorageService'];

  function projectRequestsService($http,localStorageService){
    var publicAPI = {
      getRequests : _getProjects,
      changeProjectState : _changeProjectState
    };
    return publicAPI;

    //trae la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        localProjectsList = [];
      }else{
        localProjectsList = storedList;
      }
      return localProjectsList;
    }

    //cambia el estado a en proceso o rechazado según el parámetro
    function _changeProjectState(request,newState){
      request.state_key=newState;
      var index = null;
      angular.forEach(localProjectsList, function(project, position) {
        if (student.mail === request.mail) {
          index = position;
        }
      });
      localProjectsList[index]=request;
      localProjectsStatesList(localProjectsList);
    }
    //inserta los nuevos registros al localStorage
    function localStorageStudentsList(jlist){
      localStorageService.set('localProjectsList', jlist);
    }

  }
})();
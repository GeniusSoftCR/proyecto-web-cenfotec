(function(){
  angular
  .module('cshApp')
  .service('projectRequestsService', projectRequestsService);

  projectRequestsService.$inject = ['$http','cshReqServiceFn','localStorageService'];

    
    var publicAPI = {
      getRequests : _getProjects,
      changeProjectsState : _changeProjectsStates
    };
    return publicAPI;

    //trae la lista de estudiantes
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        localProjectsList = [];
      }else{
        localProjectsList = storedList;
      }
      return localProjectsList;
    }

    //cambia el estado a elegible o rechazado según el parámetro
    function _changeStudentsState(request,newState){
      request.state_key=newState;
      var index = null;
      angular.forEach(localProjectsList, function(student, position) {
        if (student.mail === request.mail) {
          index = position;
        }
      });
      localProjectsList[index]=request;
      localStorageStudentsList(localProjectsList);
    }
    //inserta los nuevos registros al localStorage
    function localStorageStudentsList(jlist){
      localStorageService.set('localProjectsList', jlist);
    }

  }

})();
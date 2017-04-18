(function(){
  angular
  .module('cshApp')
  .service('studentRequestsService', studentRequestsService);

  studentRequestsService.$inject = ['$http', 'localStorageService'];

  function studentRequestsService($http,localStorageService){
    
    var publicAPI = {
      getRequests : _getStudents,
      changeRequestState : _changeStudentsState
    };
    return publicAPI;

    //trae la lista de estudiantes
    function _getStudents(){
      return $http.get('http://localhost:3000/api/users');
    }

    function _updateUsers(pUser){
      console.log(pUser);
      return $http.put('http://localhost:3000/api/users',pUser);
    }
    //enviar url y registro actualizado
    
    //trae la lista de estudiantes
    function _getStudents(){
      var storedList = localStorageService.get('localStudents');
      if(storedList == null){
        studentsList = [];
      }else{
        studentsList = storedList;
      }
      return studentsList;
    }

    //cambia el estado a elegible o rechazado según el parámetro
    function _changeStudentsState(request,newState){
      request.state_key=newState;
      var index = null;
      angular.forEach(studentsList, function(student, position) {
        if (student.mail === request.mail) {
          index = position;
        }
      });
      studentsList[index]=request;
      localStorageStudentsList(studentsList);
    }
    //inserta los nuevos registros al localStorage
    function localStorageStudentsList(jlist){
      localStorageService.set('localStudents', jlist);
    }
  }
})();
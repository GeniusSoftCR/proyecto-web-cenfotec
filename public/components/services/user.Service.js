(function(){
  'use strict'
  angular
  .module('cshApp')
  .service('userService', userService);
  
  userService.$inject = ['$log','$http'];

  /*Servicio para profesores y asistentes*/
  function userService($log,$http){
    /*Servicio para profesores*/
    var users = [];

    //API
    var publicAPI = {
        addUser : _addUser,
        getUsers: _getUsers,
        trackTime:_trackTime,
        changeRequestState : _changeStudentsState
    };
    return publicAPI;

    //recibe el user enviado por el controlador y lo pasa al back-end
    function _addUser(newUser){
      return $http.post('http://localhost:3000/api/user/add', newUser);
    }

    //ALGUIEN ESTá USANDO ESTA???
    // function _getUsers(){
    //   return $http.get('http://localhost:3000/api/users');
    // }
    //*****************************************************

    //con PUT traemos los usuarios bajo CUALQUIER CRITERIO
    function _getUsers(filter){
      return $http.put('http://localhost:3000/api/users/search', filter);
    }

    function _trackTime(obj) {
      return $http.put('http://localhost:3000/api/user/students/trackTime',obj);
    } 

    //procesa solicitudes de estudiantes
    function _changeStudentsState(request,newState){
      request.state=newState;
      return $http.put('http://localhost:3000/api/user/students/update',request);      
    }

  }
})();
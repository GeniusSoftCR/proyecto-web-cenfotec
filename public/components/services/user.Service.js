(function(){
  'use strict'
  angular
  .module('cshApp')
  .service('userService', userService);
  
  userService.$inject = ['$log','$http','localStorageService'];

  /*Servicio para profesores y asistentes*/
  function userService($log,$http,localStorageService){
    /*Servicio para profesores*/
    var users = [];


    var publicAPI = {
        addUser : _addUser,
        getUser: _getUser,
        getUsers: _getUsers,
        deleteUser : _deleteUser,
        updateUser : _updateUser,
        getRequests : _getStudents,
        changeRequestState : _changeStudentsState
    };
    return publicAPI;


    // function _addUser(pUser){
    //   //users.push(pUser);
    //   $log.info(pUser)
    //   var user = _getUser();
    //   users.push(pUser);
    //   $log.info(user);
    //   localStorageService.set('localUsers', users);
    // }

    function _addUser(newUser){
      return $http.post('http://localhost:3000/api/user/add', newUser );
    }

    //trae la lista de estudiantes
    function _getStudents(){
      return $http.get('http://localhost:3000/api/users/students');
    }
    //actualiza el estado de los estudiantes
    //cambia el estado a elegible o rechazado según el parámetro
    function _changeStudentsState(request,newState){
      request.state=newState;
      return $http.put('http://localhost:3000/api/user/students/update',request);      
    }


    function _deleteUser (id) {
      console.log(id)

      localStorageService.remove(id)
      users.splice(id, 1);
      localStorageService.set('localUsers',users);

    }

   function _getUser(index){
      /*var listaStored = localStorageService.get('localUsers');


        $log.info('_getUser---'+listaStored)


        angular.forEach(listaStored, function(user) {


          //console.log('user----'+user.index);


          if (user.index === index) {
            return user;
          }

        })*/
      }


    function _getUsers(){
      return localStorageService.get('localUsers');
    };


    function _updateUser(pUser) {
      localStorageService.set(['localUsers'],pUser);
    }
   
  }
})();
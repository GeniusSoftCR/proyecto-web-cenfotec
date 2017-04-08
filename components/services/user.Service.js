(function(){
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
        updateUser : _updateUser
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones



    function _addUser(pUser){
      //users.push(pUser);
      $log.info(pUser)
      var user = _getUser();
      users.push(pUser);
      $log.info(user);
      localStorageService.set('localUsers', users);
    }

    function _deleteUser (id) {
      console.log(id)

      localStorageService.remove(id)
      users.splice(id, 1);
      localStorageService.set('localUsers',users);

    }

    function _getUser(index){
      var listaStored = localStorageService.get('localUsers');


        $log.info('_getUser---'+listaStored)


        angular.forEach(listaStored, function(user) {


          console.log('user----'+user.index);


          if (user.index === index) {
            return user;
          }

        })
      }


    function _getUsers(){
      console.log(localStorageService.get('localUsers'));
      var listaStored = localStorageService.get('localUsers');
      if (listaStored == null ) {
        users = [];
      }else {
        users = listaStored;
      };
      return users;
    }

    function _updateUser(pUser) {
      localStorageService.set(['localUsers'],pUser);
    }
   
  }
})();
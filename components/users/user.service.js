(function(){
  angular
  .module('cshApp')
  .service('userService', userService);

  function userService(){
    var user = [];
    var publicAPI = {
        addUser : _addUser,
        getUser: _getUser,
        setLocal : localStorageUser
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _addUser(pUser){
      //users.push(pUser);
      user.push(pUser);
      console.log(pUser);
      localStorageUser(user);

    }

    function _getUser(){
      var listaStored = localStorage.getItem('localUser');
      if (listaStored == null ) {
        user = [];
      }else {
        user = JSON.parse(listaStored);
      }
      return user;
    }

    function localStorageUser(pUser){
      localStorage.setItem(['localUser'], JSON.stringify(pUser));
    }

  }

})();
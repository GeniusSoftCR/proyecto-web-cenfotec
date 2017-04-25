(function(){

'use strict';
  angular.module('cshApp')
  .service('AuthService', AuthService);

  AuthService.$inject = ['$q','$http','SessionService','localStorageService','userService'];

  function AuthService($q,$http,SessionService,localStorageService,userService) {
    var service = {
      logIn:_logIn,
      logOut:_logOut,
      isAuth:_isAuth,
      getAuthUser:_getAuthUser
    };
    return service;

    /////////////////////////////////////////////////// | PUBLIC API | //////////
    function _logIn(credentials) {
      return $http.put('http://localhost:3000/api/user/login',credentials)
    }

    function _logOut(){
      SessionService.destroy();
    }

    function _isAuth(){
      return !!SessionService.session;
    }
    
    function _getAuthUser() {
      return SessionService.session;
    }
  }
})();
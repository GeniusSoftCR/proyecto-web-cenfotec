(function(){

'use strict';
  angular.module('cshApp')
  .service('AuthService', AuthService);

  AuthService.$inject = ['$http','SessionService','localStorageService'];


  function AuthService($http,SessionService,localStorageService) {
    // API CODE 

    //////////////////////////

    var service = {
      logIn:_logIn
    };
    return service;

    //////////////////////////////////

    function _logIn() {
      
    }
  }
})();


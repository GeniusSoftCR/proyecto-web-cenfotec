(function(){

'use strict';
  angular.module('cshApp')
  .service('AuthService', AuthService);

  AuthService.$inject = ['$http','SessionService','localStorageService','logInService'];


  function AuthService($http,SessionService,localStorageService,logInService) {
    // API CODE 

    //////////////////////////

    var service = {
      logIn:_logIn
    };
    return service;

    //////////////////////////////////

    function _logIn(credentials) {
      var validation = function(){
        var comparation = {},
            usersLocal = logInService;

        angular.forEach(usersLocal, function(val ,key){
        if (credentials.email === val.email && credentials.password === val.password){
          comparation.email = val.email;
          comparation.password = val.password;
        }else{
          comparation = { };
        };

        return comparation;
      });
      }
      var request = validation();

      $q.when(request).then( function(){

      });
    }
  }
})();


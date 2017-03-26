(function(){

'use strict';
  angular.module('cshApp')
  .service('AuthService', AuthService);

  AuthService.$inject = ['$q','$http','SessionService','localStorageService','logInService'];


  function AuthService($q,$http,SessionService,localStorageService,logInService) {
    // API CODE 

    //////////////////////////

    var service = {
      logIn:_logIn
    };
    return service;

    //////////////////////////////////

    function _logIn(credentials) {

      var validation = function(){
        var usersLocal = logInService;
        var user = {};

        angular.forEach(usersLocal, function(val ,key){

          if (credentials.email == val.email && credentials.password == val.password){
            delete val.password;
            user = val;

          }else{
            return null;
          };        
        });
        return user;
      };

      var request = validation();    
      $q.when(request).then( function(){
        SessionService.create(request.email,request.role)
      });
      return request.email;
    };
    AuthService.logOut = function(){
      SessionService.destroy();
    }
  }
})();


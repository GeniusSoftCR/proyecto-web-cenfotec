(function(){

'use strict';
  angular.module('cshApp')
  .factory('AuthService', AuthService);

  AuthService.$inject = ['$log','$q','$http','SessionService','localStorageService']


  function AuthService($log,$q,$http,SessionService,localStorageService) {
    // PRIVATE CODE
      console.log('authService - status:on');
    // #DATOS QUEMADOS
      var users = [
        {
          email : "kaguilara@ucenfotec.ac.cr",
          password :"2310",
          role: "admin"
        }      
      ];
      localStorageService.set('users', users);
    // PUBLIC API
      var api = {
          authenticate: _authenticate(users)
      };
      return api;
    // API CODE 

    function _authenticate(users) {

      var response = users;

      $q.when(response).then(function() {
        SessionService.create
          (
            response.email,
            response.role
          );          
      });
      return response.email;
      // return $http
      //   .post('/login', credentials)
      //   .then(function (res) {
      //     Session.create
      //     (
      //       res.data.id, 
      //       res.data.user.id,
      //       res.data.user.role
      //     );
      //     return res.data.user;
      //   });
    };
  }

})();
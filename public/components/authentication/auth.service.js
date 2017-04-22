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
    
    //////////////////////////

    function _logIn(credentials) {
      return $http.put('http://localhost:3000/api/user',credentials)
    }

    // function _logIn(credentials) {
    //   var users = userService.getUsers();

    //   var validation = function(){

    //     var user = {"email":"hmurillop@ucenfotec.ac.cr","username":"hmurillop","role":"student","img":"../imgs/users/hector.jpg","id":"444"};
    //     var userSearch = true;

    //     angular.forEach(users, function(val ,key){

    //       if (userSearch) {
    //         if ( credentials.email == val.email && credentials.password == val.password){
    //           userSearch = false;
    //           delete val.password;
    //           user = val;
    //         }else{
    //           user = false;
    //         };
    //       };
    //     });

    //     return user;
    //   };

    //   var request = validation(); 

    //   $q.when(request).then( function(){
    //     SessionService.create(request)

    //     console.log(SessionService.session)
    //   });
    //   return request;
    // };

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
(function(){
  'use strict';
  angular
  .module('cshApp')
  .config(configuration)

  function configuration($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('landing',{
      url: '/landingPage',
      templateUrl: './components/landingPage/landingPage.html'
    })

    .state('logIn',{
      url: '/logIn',
      templateUrl: '/components/logIn/logIn.view.html',
      controller: 'logInController',
      controllerAs: 'logInCtrl'
    })
    //Steph solicitud estudiantes
    .state('students',{
          url: '/students',
          templateUrl: 'components/students/students.view.html',
          controller: 'studentController',
          controllerAs: 'studentCtrl'
        })
     //Steph registro de usuarios
    .state('users',{
          url: '/users',
          templateUrl: 'components/users/user.view.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        })


    $urlRouterProvider.otherwise('/landingPage');
  }

})();

(function(){
  'use strict';
  angular
  .module('appRoutes',['ui.router'])
  .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

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
    .state('registrerProfessor',{
          url: '/registrerProfessor',
          templateUrl: 'components/administratorSteph/registrerProfessor/userProfessor.view.html',
          controller: 'userProfessorController',
          controllerAs: 'userProfessorCtrl'
        })

    .state('addCareers',{
          url: '/addCareers',
          templateUrl: 'components/administratorSteph/addCareers/addCareers.view.html',
          controller: 'addCareersController',
          controllerAs: 'addCareersCtrl'
        })


    $urlRouterProvider.otherwise('/landingPage');
  };

})();

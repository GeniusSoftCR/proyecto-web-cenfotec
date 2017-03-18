(function(){
  angular
    .module('cshApp')
    .config(configuration)

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      

      $stateProvider
        .state('students',{
          url: '/students',
          templateUrl: 'components/students/students.view.html',
          controller: 'studentController',
          controllerAs: 'studentCtrl'
        })
       

        $urlRouterProvider.otherwise('/students');
    }



})();











/*
(function(){
  'use strict';
  angular
  .module('cshApp')
  /*.module('appRoutes',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('students',{
          url: '/students',
          templateUrl: 'components/students/students.view.html',
          controller: 'studentController',
          controllerAs: 'studentCtrl'
        });
      $urlRouterProvider.otherwise("/students"); 
    });
});


      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix(""); */



(function(){
  'use strict';
  angular
    .module('appRoutes',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('students',{
          url: '/students',
          templateUrl: 'components/students/students.view.html',
          controller: 'studentController',
          controllerAs: 'studentCtrl'
        });
      $urlRouterProvider.otherwise("/"); 
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix("");  
    });
});

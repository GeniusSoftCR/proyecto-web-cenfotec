(function(){
  'use strict';
  angular.module('cshApp', 

    ['appRoutes','angular-filepicker', 'ngFileUpload', 'LocalStorageModule', 'angularCSS','ngPassword'])

    .config(function (filepickerProvider) {
      filepickerProvider.setKey('A6EzU2EhNTYmcvkWhu2cCz');
    })
    .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
      all: '*',
      admin: 'administrador',
      assistant: 'asistente',
      professor : 'profesor',
      student: 'estudiante'
    })
      //Run = confuiguracion que se aplica al correr la aplicacion *vigila*
    .run(function ($rootScope, AUTH_EVENTS, AuthService) {
      //on esta atento a eventos en rootscope -- $stateChangeStartesrta atento a cambios
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        // if (toState.urk) {}
      });
    });
})();
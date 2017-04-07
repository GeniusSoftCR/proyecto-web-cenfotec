(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$log','$location','$rootScope','AUTH_EVENTS','AuthService'];

	
 	function logInController ($log,$location,$rootScope,AUTH_EVENTS,AuthService){

 		if(AuthService.isAuth()){
 			var authUser = AuthService.getAuthUser();
 			
 			$location.path('/inicio/usuario');
 		}else{
 			$location.path('/entrar');
 		}

 		//vm = view model
		var vm = this;

		vm.user = {};

		vm.logIn = function(credentials){ 
			var authRequest = AuthService.logIn(credentials);
			
			if(authRequest){

				$log.info("Login success: "+ authRequest.username);
		         
		        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);   
		        
		        $location.path('/inicio/usuario');
			}else{

		        $log.error("Login failed")
		        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		        $location.path('/entrar');
			}
	    };

	};
})();
(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$q','$timeout','$log','$location', '$rootScope','AUTH_EVENTS','AuthService',];

	
 	function logInController ($q,$timeout,$log,$location,$rootScope,AUTH_EVENTS,AuthService){
 		//vm = view model
		var vm = this;

		vm.user = {};

		vm.logIn = function(credentials){ 
			var userInfo = {
				email: credentials.email,
				password: credentials.password
			};
			
			vm.loading = true;
			
			var logInRequest = AuthService.logIn;
			
			if(logInRequest){
				$log.info("Login success: "+ logInRequest);
		         
		        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);   
		        
		        $location.path('/addCareers');
			}else{
				vm.loading  = true;
		        $log.error("Login failed")
		        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		        $location.path('/logIn');
			}
	    };

	};
})();
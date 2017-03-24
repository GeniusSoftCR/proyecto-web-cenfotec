(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$q','$timeout','$log','$location','AUTH_EVENTS','AuthService'];

	
 	function logInController ($q,$timeout,$log,$location,AUTH_EVENTS,AuthService){
 		//vm = view model
		var vm = this;

		vm.user = {};

		vm.logIn = function(credentials){ 
			var userInfo = {
				email: credentials.email,
				password: credentials.password
			};
			
			vm.loading = true;
			
			var logInRequest = AuthService.logIn();			
	    };

	};
})();
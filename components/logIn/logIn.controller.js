(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$q','$timeout','$log','$rootScope','$scope','$location','AUTH_EVENTS','AuthService','localStorageService'];

	
 	function logInController ($q,$timeout,$log,$rootScope,$scope,$location,AUTH_EVENTS,logInService,AuthService,localStorageService){

		this.user = { 
			email: "kaguilara@ucenfotec.ac.cr", 
			password : "2310"
		};

	    this.logIn = function(user){

			this.loading = true;


			var logInRequest = AuthService._authenticate;

				console.log(logInRequest);

			$q.when(logInRequest).then(function (){
				$q.when(logInRequest).then(function() {    
			      
			           
			        $log.info("Login success: "+logInRequest);
			        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);   
			        
			        $location.path('/404');
			      
			    });
			})
	    };

	};
})();
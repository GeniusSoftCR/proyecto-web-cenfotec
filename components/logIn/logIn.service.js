(function (){
	'use strict';
	angular
	.module('cshApp')
	.service("logInService", logInService);

	logInService.$inject= ['$http', '$location','localStorageService'];

	function logInService($http, $location, localStorageService) {

		var users = [
			{ 
			email: "kaguilara@ucenfotec.ac.cr", 
			password : "2310",
			role: "admin",
			id : "111"
			}
		];

		return users;

		
		}

		var cacheSession = function(userData){
			logInCtrl.set ("logInUser", true);
			var user = {
				email : logInCtrl.email,
				password : logInCtrl.password
			}

			logInCtrl.setList("user", user)
		}
		var uncacheSession
	

})();
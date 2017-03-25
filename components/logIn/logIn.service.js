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
			},
			{ 
			email: "efonscab@ucenfotec.ac.cr", 
			password : "2310",
			role: "professor",
			id : "222"
			},
			{ 
			email: "sbarrantesr@ucenfotec.ac.cr", 
			password : "2310",
			role: "assistant",
			id : "333"
			},
			{
			email: "hmurrillop@ucenfotec.ac.cr", 
			password : "2310",
			role: "student",
			id : "444"
			}
		];

		return users;

		
		}

		var cacheSession = function(userData){
			logInCtrl.set ("logInUser", true);
			var user = {
				email : credentials.email,
				password : credentials.password
			}

			logInCtrl.setList("user", user)
		}
		
	

})();
(function (){
	'use strict';
	angular
	.module('cshApp')
	.service("logInService", logInService);

	logInService.$inject= ['$http', '$location','localStorageService'];

	function logInService($http, $location, localStorageService) {

		var users = [
			{ email: "kaguilara", password : "2310"}
		]

		this.login = function (user) {

		 angular.forEach(users, function(value, key) {
		 	console.log(value);
		 	console.log(key);
		  });

		// 	return authUser;
		}

		var cacheSession = function(userData){
			logInCtrl.set ("logInUser", true);
			var user = {
				name : userData.user.email,
				password : userData.user.password
			}

			logInCtrl.setList("user", user)
		}
		var uncacheSession
	}

})();
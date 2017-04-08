(function () {
	'use strict';

	angular.module('cshApp')
	.controller('mainController', mainController);

	mainController.$inject = ['$location','AuthService'];

 	function mainController ($location,AuthService){

 		if(!AuthService.isAuth()){
 			$location.path('/entrar');
 		};
 		
 		//vm = view model
		var vm = this;
		//////////////
		
		vm.user = AuthService.getAuthUser();
		vm.logOut = function () {
			AuthService.logOut();
			$location.path('/entrar');
		}	
	};
})();
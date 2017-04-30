(function () {
	'use strict';

	angular.module('cshApp')
	.controller('mainController', mainController);

	mainController.$inject = ['$location','AuthService'];

 	function mainController ($location,AuthService){

 		// if(AuthService.isAuth()){
 		// 	$location.path('/inicio/perfil');
 		// }else{
 		// 	$location.path('/entrar'); 			
 		// }
 		
 		//vm = view model
		var vm = this;
		//////////////

		vm.isActive = function(route) {
        	return route === $location.path();
    	}
		
		vm.user = AuthService.getAuthUser();
		vm.logOut = function () {
			AuthService.logOut();
			$location.path('/entrar');
		}	
	};
})();
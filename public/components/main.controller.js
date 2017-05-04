(function () {
	'use strict';

	angular.module('cshApp')
	.controller('mainController', mainController);

	mainController.$inject = ['$location','$timeout','AuthService'];

 	function mainController ($location,$timeout,AuthService){
	
 		//vm = view model
		var vm = this;
		//////////////////////////////////////////
		vm.activeTab = _activeTab;
		vm.checkRole = _checkRole;
		vm.logOut = _logOut;
		//////////////////////////////////////////
		vm.user = AuthService.getAuthUser();
		//////////////////////////////////////////	

		function _activeTab(route) {
        	return route === $location.path();
    	}
    	function _checkRole(roles) {
    		var check = false;
			angular.forEach(roles, function(role, key) {
				if (role === vm.user.role) {
					check = true;
					return;
				}
			});
			return check;
    	}

		function _logOut() {
			AuthService.logOut();
			$location.path('/entrar');
		}	
	}
})();

//admin proff assitente
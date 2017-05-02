(function () {
	angular
	.module('cshApp')
	.controller('projectsController', projectsController);	
	

	projectsController.$inject = ['$stateParams','AuthService'];

	function projectsController ($stateParams,AuthService) {
		//vm = view model
		var vm = this;
		//////////////////////////////////////////
		vm.checkRole = _checkRole;
		//////////////////////////////////////////
		vm.user = AuthService.getAuthUser();
		//////////////////////////////////////////	

    	function _checkRole(roles) {
    		var check = false
			angular.forEach(roles, function(role, key) {
				if (role === vm.user.role) {
					check = true;
					return;
				}
			});
			return check;
    	}		
	};
})();
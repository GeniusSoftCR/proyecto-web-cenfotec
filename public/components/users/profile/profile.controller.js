(function () {
	angular
	.module('cshApp')
	.controller('profileController', profileController);	
	

	profileController.$inject = ['$stateParams','AuthService'];

	function profileController ($stateParams,AuthService) {
		var vm = this;
		vm.user = {};
		vm.user = AuthService.getAuthUser();
		console.log(vm.user)
		//vm.user.username = $stateParams.username;		
	};
})();
(function () {
	angular
	.module('cshApp')
	.controller('profileController', profileController);	
	

	profileController.$inject = ['$stateParams','AuthService'];

	function profileController ($stateParams,AuthService) {

		var vm = this;
		vm.user = {};
		vm.user = AuthService.getAuthUser();


		//vm.user.username = $stateParams.username;		


	};
})();
(function () {
	angular
	.module('cshApp')
	.controller('profileController', profileController);	
	

	profileController.$inject = ['$stateParams'];

	function profileController ($stateParams) {
		this.user = {};

		this.user.username = $stateParams.username;
		
	};
})();
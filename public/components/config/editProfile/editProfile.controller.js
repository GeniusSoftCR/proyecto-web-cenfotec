(function(){
	'use strict';
	angular
	.module('cshApp')
	.controller('editProfileController', editProfileController);

	editProfileController.$inject = ['$log','$http','userService','ImageService'];

	function editProfileController($log,$http,userService,ImageService){
		var vm = this;

		vm.editedUser = {};
	}
})();
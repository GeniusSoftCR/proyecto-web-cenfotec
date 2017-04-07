(function () {
	'use strict';
	angular.module('cshApp')
	.service('SessionService', SessionService)

	SessionService.$inject = ['localStorageService'];

	function SessionService(localStorageService){
		
		this.session = localStorageService.get('session');

		this.create = function (user) {//sessionId
			this.session = user;
			localStorageService.set('session',user);
		};

		this.destroy = function () {
			delete this.session;
			localStorageService.remove('session');
		};
	};
})();
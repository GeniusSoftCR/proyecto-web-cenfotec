(function () {
	'use strict';
	angular.module('cshApp')
	.service('SessionService', SessionService)

	SessionService.$inject = ['localStorageService'];

	function SessionService(localStorageService){
		
		this.session = localStorageService.get('session');

		this.create = function (data) {//sessionId	
			this.session = data;		
			localStorageService.set('session',data);			
		};

		this.destroy = function () {
			delete this.session;
			localStorageService.remove('session');
		};
	}
})();
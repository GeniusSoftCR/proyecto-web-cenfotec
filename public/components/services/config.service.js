(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('carrersService', carrersService);

	carrersService.$inject = ['$log','$http'];

	function carrersService($log,$http){

		var publicApi = {
			addCarrers: _addCarrers,
			//getCarrers: _getCarrers
		};
		return publicApi;

		function _addCarrers(newCarrer){

		}
	}
})();
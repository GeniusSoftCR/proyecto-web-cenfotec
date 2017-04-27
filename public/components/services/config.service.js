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
			return $http.post('http://localhost:3000/api/config/add', newCarrer);
		}
	}
})();
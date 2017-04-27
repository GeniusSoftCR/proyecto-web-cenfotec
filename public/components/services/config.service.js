(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('configService', configService);

	configService.$inject = ['$log','$http'];

	function configService($log,$http){

		var publicApi = {
			addCarrers: _addCarrers
			//getCarrers: _getCarrers
		};
		return publicApi;

		function _addCarrers(newCareer){
			return $http.post('http://localhost:3000/api/config/addCareer', newCareer);
		}
	}
})();
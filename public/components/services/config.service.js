(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('configService', configService);

	configService.$inject = ['$log','$http','HOST_CONFIG'];

	function configService($log,$http,HOST_CONFIG){

		var host = HOST_CONFIG.address;

		var publicApi = {
			addCareer: _addCarrer,
			getCareers: _getCarrers,
			deleteCareer: _deleteCareer
		};
		return publicApi;

		function _addCarrer(newCareer){
			return $http.post('http://'+host+':3000/api/config/addCareer', newCareer);
		};
		function _getCarrers(){
			return $http.get('http://'+host+':3000/api/config/getCareers');
		};
		function _deleteCareer(object){
			return $http.put('http://'+host+':3000/api/config/deleteCareer', object);
		}
	};
})();
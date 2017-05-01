(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('configService', configService);

	configService.$inject = ['$log','$http'];

	function configService($log,$http){

		var publicApi = {
			addCareer: _addCarrer,
			getCareers: _getCarrers,
			deleteCareer: _deleteCareer
		};
		return publicApi;

		function _addCarrer(newCareer){
			return $http.post('http://localhost:3000/api/config/addCareer', newCareer);
		};
		function _getCarrers(){
			return $http.get('http://localhost:3000/api/config/getCareers');
		};
		function _deleteCareer(object){
			return $http.put('http://localhost:3000/api/config/deleteCareer', object);
		}
	};
})();
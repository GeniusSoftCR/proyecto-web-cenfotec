(function(){
	'use strict';
	angular
	.module('cshApp')
	.config(configuration)

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('landing',{
			url: '/landingPage',
			templateUrl: './components/landingPage/landingPage.html'
		})

		.state('logIn',{
			url: '/logIn',
			templateUrl: '/components/logIn/logIn.view.html',
			controller: 'logInController',
			controllerAs: 'logInCtrl'
		})
		//Andres solicitud de proyecto
		.state('solicitud-proyecto',{
		  url: '/solicitud-proyecto',
		  templateUrl: 'components/projectRequests/cshrequest.view.html',
		  controller: 'cshReqController',
		  controllerAs: 'cshReqCtrl'
		})

		$urlRouterProvider.otherwise('/landingPage');
	}

})();
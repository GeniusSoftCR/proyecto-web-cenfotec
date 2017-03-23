(function(){
	'use strict';
	angular
	.module('appRoutes',['ui.router'])
	.config(configuration);

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

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
		.state('profile', {
		    url: '/perfil',
		    templateUrl:'./components/userProfile/userProfile.view.html'
		})

		$urlRouterProvider.otherwise('/landingPage');
	};

})();
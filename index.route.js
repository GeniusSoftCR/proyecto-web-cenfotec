(function(){
	'use strict';
	angular
	.module('appRoutes',['ui.router','oc.lazyLoad'])
	.config(configuration);

	configuration.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];//,'$ocLazyLoadProvider'

	function configuration($stateProvider, $urlRouterProvider,$locationProvider){//
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
		.state('perfil', {
		    url: '/perfil/:username',
	        resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
	            './components/profile/profile.controller.js'
	          ])}]
	        }, 
			templateUrl:'./components/profile/profile.view.html',
		    controller:'profileController',
		    controllerAs:'ctrl'
		})
		.state('404', {
		    url: '/404',
			templateUrl:'./components/404.html'
		})

		$urlRouterProvider.otherwise('/404');
	};

})();
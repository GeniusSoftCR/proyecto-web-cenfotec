(function(){
	angular
	.module('cshApp')
	.config(configuration)

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('landing',{
			url: '/landingPage',
			template: 'components/landingPage/landingPage.html'
		})

		.state('logIn',{
			url: '/logIn',
			template: '/components/logIn/logIn.view.html',
			controller: 'logInController',
			controllerAs: 'logInCtrl'
		})

		$urlRouterProvider.otherwise('/landingPage');
	}

})();
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
		//Andres ver proyecto
		.state('watchProject',{
			url: '/proyecto/:proyectoId',
			views: {
				'': { //andres ver proyecto
					templateUrl: '/components/projects/watchproject/projects.view.html',
					controller: 'watchProjectController',
					controllerAs: 'watchProjectCtrl'
				},
	      'anotaciones@watchProject': { //ANdres anotaciones
	        templateUrl: 'components/projectAnotations/projectanotations.view.html',
	        controller: 'projectAnotationsController',
	        controllerAs: 'anotationsCtrl'
	      },
	      'estudiantes@watchProject': { //Andres asignar estudiantes
	        templateUrl: 'components/assignStudents/assignStudents.projects.view.html',
	        controller: 'assignStudentsController',
	        controllerAs: 'assignStudentsCtrl'
	      }
	    }
		})
		//steph estudiantes
		.state('estudiantes',{
	      url: '/estudiantes',
	      templateUrl: 'components/students/students.view.html',
	      controller: 'studentController',
	      controllerAs: 'studentCtrl'
	    })
		//esteban ver proyectos
		.state('administrator-projects',{
			url: '/admin/proyectos',
			templateUrl: '/components/administratorEsteban/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'projectsCtrl'
		})
		$urlRouterProvider.otherwise('/landingPage');
	}

})();
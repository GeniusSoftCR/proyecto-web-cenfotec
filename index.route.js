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
		//ANdres anotaciones
		.state('ver-proyecto',{
		  url: '/ver-proyecto',
		  templateUrl: 'components/projectAnotations/projectanotations.view.html',
		  controller: 'projectAnotationsController',
		  controllerAs: 'anotationsCtrl'
		})
		//andres asignar profesores
		.state('asignarEstudiantes',{
		  url: '/ver-proyecto/asignarEstudiantes',
		  templateUrl: 'components/assignStudents/assignStudents.projects.view.html',
		  controller: 'assignStudentsController',
		  controllerAs: 'assignStudentsCtrl'
		})
		//Andres ver proyecto
		.state('watchProject',{
			url: '/proyecto/:proyectoId',
			templateUrl: '/components/projects/watchproject/projects.view.html',
			controller: 'watchProjectController',
			controllerAs: 'watchProjectCtrl'
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
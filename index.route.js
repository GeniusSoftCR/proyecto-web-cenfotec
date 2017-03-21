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
		//steph estudiantes
		.state('estudiantes',{
	      url: '/estudiantes',
	      templateUrl: 'components/students/students.view.html',
	      controller: 'studentController',
	      controllerAs: 'studentCtrl'
	    })



		$urlRouterProvider.otherwise('/landingPage');
	}

})();
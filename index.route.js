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
		  templateUrl: 'components/projects/projectRequests/cshrequest.view.html',
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
	        templateUrl: 'components/projects/projectAnotations/projectanotations.view.html',
	        controller: 'projectAnotationsController',
	        controllerAs: 'anotationsCtrl'
	      },
	      'estudiantes@watchProject': { //Andres asignar estudiantes
	        templateUrl: 'components/projects/assignStudents/assignStudents.projects.view.html',
	        controller: 'assignStudentsController',
	        controllerAs: 'assignStudentsCtrl'
	      },
	      'profesores@watchProject': { //Andres asignar estudiantes
	        templateUrl: 'components/projects/assignTeachers/assignTeachers.projects.view.html',
	        controller: 'assignTeachersController',
	        controllerAs: 'assignTeachersCtrl'
	      },
	      'header@watchProject': { //Andres asignar estudiantes
	        templateUrl: 'components/dashboard/header/header.view.html',
	        controller: 'headerController',
	        controllerAs: 'headerCtrl'
	      },
	      'menu@watchProject': { //Andres asignar estudiantes
	        templateUrl: 'components/dashboard/menu/menu.view.html',
	        controller: 'menuController',
	        controllerAs: 'menuCtrl'
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
		 //Steph registro de usuarios
		.state('registrerProfessor',{
		      url: '/registrerProfessor',
		      templateUrl: 'components/administratorSteph/registrerProfessor/userProfessor.view.html',
		      controller: 'userProfessorController',
		      controllerAs: 'userProfessorCtrl'
		    })

		.state('addCareers',{
		      url: '/addCareers',
		      templateUrl: 'components/administratorSteph/addCareers/addCareers.view.html',
		      controller: 'addCareersController',
		      controllerAs: 'addCareersCtrl'
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
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

		/**
		 *
		 * KEVIN
		 *
		 */
		.state('logIn',{
			url: '/logIn',
			templateUrl: './components/logIn/logIn.view.html',
			controller: 'logInController',
			controllerAs: 'logInCtrl'
		})
<<<<<<< HEAD
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
=======
		.state('404',{
			url: '/404',
			templateUrl: './components/404.html'
		})

		/**
		 *
		 * ANDRES
		 *
		 */
		

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
	      },
	      'archivos@watchProject': { //Esteban archivos
	        templateUrl: 'components/projects/projectFiles-esteban/projectFiles.view.html',
	        controller: 'filesController',
	        controllerAs: 'filesCtrl'
	      }
	    }
		})
		

		/**
		 *
		 * Stephanies
		 *
		 */
		
		 .state('students',{
		       url: '/students',
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
		 .state('registrerAssistant',{
		       url: '/registrerAssistant',
		       templateUrl: 'components/administratorSteph/registrerAssistant/userAssistant.view.html',
		       controller: 'userAssistantController',
		       controllerAs: 'userAssistantCtrl'
		     })

		 .state('registrerAdmi',{
		       url: '/registrerAdmi',
		       templateUrl: 'components/administratorSteph/registrerAdmi/userAdmi.view.html',
		       controller: 'userAdmiController',
		       controllerAs: 'userAdmiCtrl'
		     })
		/**
		 *
		 * ESTEBAN
		 *
		 */
		
		//Solicitudes de estudiantes
		.state('administrator-studentRequests',{
			url: '/admin/solicitudesEstudiantes',
			templateUrl: '/components/administratorEsteban/studentRequests/studentRequests.view.html',
			controller: 'studentRequestsController',
			controllerAs: 'studentReqCtrl'
		})
		//Listar proyectos por actor
		.state('administrator-projects',{
			url: '/admin/proyectos',
			templateUrl: '/components/administratorEsteban/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'projectsCtrl'
		})
		.state('asistant-projects',{
			url: '/asis/proyectos',
			templateUrl: '/components/asistantsEsteban/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'projectsCtrl'
		})
		.state('teacher-projects',{
			url: '/prof/proyectos',
			templateUrl: '/components/teachersEsteban/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'projectsCtrl'
		})
		.state('student-projects',{
			url: '/estu/proyectos',
			templateUrl: '/components/studentsEsteban/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'projectsCtrl'
		})
		//Reporte de involucrados por proyecto
		.state('administrator-reports',{
			url: '/admin/reportes/miembrosProyecto',
			templateUrl: '/components/administratorEsteban/reports/projectMembers/projectMembers.view.html',
			controller: 'projectMembersController',
			controllerAs: 'projectMembCtrl'
		})
		//Listar clientes
		.state('asistant-clients',{
			url: '/asis/clientes',
			templateUrl: '/components/asistantsEsteban/clients/clients.view.html',
			controller: 'clientsController',
			controllerAs: 'clientsCtrl'
		})

		/**
		 *
		 * HECTOR
		 *
		 */
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
		
>>>>>>> dev

		$urlRouterProvider.otherwise('/404');
	};

})();
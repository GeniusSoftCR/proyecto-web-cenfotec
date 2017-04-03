(function(){
	'use strict';
	angular
	.module('appRoutes',['ui.router','oc.lazyLoad'])

	.config(configuration)

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider,$ocLazyLoad){

		$stateProvider

		.state('landing',{
			url: '/',
			templateUrl: './components/landing/landing.html'
		})

		.state('studentRequest',{
			url: '/solicitud-estudiante',
		    templateUrl: 'components/students/students.view.html',
		    controller: 'studentController',
		    controllerAs: 'studentCtrl'
		})

		.state('proyectRequest',{
			url: '/solicitud-proyecto',
		    templateUrl:'components/projects/projectRequests/cshrequest.view.html',
		    controller: 'cshReqController',
		    controllerAs: 'cshReqCtrl'
		})

		.state('logIn',{
			url: '/entrar',
			templateUrl: './components/logIn/logIn.view.html',
			controller: 'logInController',
			controllerAs: 'vm'
		})

		.state('main',{
			url:'/inicio/:username',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/main.controller.js')
	          }]
		    },			
			templateUrl: './components/main.html',
			controller:'mainController',
			controllerAs:'vm'
		})
		
		// .state('main.profile',{
		// 	url:'/:pUsuario',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/projects/projects.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/profile/profile.view.html'			
		// })
		
		.state('main.proyects',{
			url:'/proyectos',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/projects/projects.controller.js')
	          }]
		    },
			templateUrl: '/components/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'vm'
		})

		.state('main.students',{
			url:'/estudiantes',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/students/studentRequests.controller.js')
	          }]
		    },
			templateUrl: '/components/students/studentRequests.view.html',
			controller: 'studentRequestsController',
			controllerAs: 'vm'
		})

		// .state('watchProject',{
		// 	url: '/proyectos/:proyectoId',
		// 	views: {
		// 		'': {
		// 			templateUrl: '/components/projects/watchproject/projects.view.html',
		// 			controller: 'watchProjectController',
		// 			controllerAs: 'watchProjectCtrl'
		// 		},
		// 	    'anotaciones@watchProject': { //ANdres anotaciones
		// 	    	templateUrl: 'components/projects/projectAnotations/projectanotations.view.html',
		// 	    	controller: 'projectAnotationsController',
		// 	    	controllerAs: 'anotationsCtrl'
		// 		},
		//       	'estudiantes@watchProject': { //Andres asignar estudiantes
		//         	templateUrl: 'components/projects/assignStudents/assignStudents.projects.view.html',
		//         	controller: 'assignStudentsController',
		//         	controllerAs: 'assignStudentsCtrl'
		//       	},
		//       	'profesores@watchProject': { //Andres asignar estudiantes
		//       	  templateUrl: 'components/projects/assignTeachers/assignTeachers.projects.view.html',
		//       	  controller: 'assignTeachersController',
		//       	  controllerAs: 'assignTeachersCtrl'
		//       	},
		// 		'header@watchProject': { //Andres asignar estudiantes
		// 		  templateUrl: 'components/dashboard/header/header.view.html',
		// 		  controller: 'headerController',
		// 		  controllerAs: 'headerCtrl'
		// 		},
		// 		'menu@watchProject': { //Andres asignar estudiantes
		// 		  templateUrl: 'components/dashboard/menu/menu.view.html',
		// 		  controller: 'menuController',
		// 		  controllerAs: 'menuCtrl'
		// 		},
		// 		'archivos@watchProject': { //Esteban archivos
		// 		  templateUrl: 'components/projects/projectFiles-esteban/projectFiles.view.html',
		// 		  controller: 'filesController',
		// 		  controllerAs: 'filesCtrl'
		// 		}
	 //    	}
		// })		
		.state('students',{
		       url: '/solicitudEstudiantes',
		       templateUrl: 'components/students/students.view.html',
		       controller: 'studentController',
		       controllerAs: 'studentCtrl'
		     })
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
		.state('administrator-studentRequests',{
			url: '/admin/solicitudesEstudiantes',
			templateUrl: '/components/administratorEsteban/studentRequests/studentRequests.view.html',
			controller: 'studentRequestsController',
			controllerAs: 'studentReqCtrl'
		})
		// .state('administrator-projects',{
		// 	url: '/admin/proyectos',
		// 	templateUrl: '/components/administratorEsteban/projects/projects.view.html',
		// 	controller: 'loadProjectsController',
		// 	controllerAs: 'projectsCtrl'
		// })
		/*.state('asistant-projects',{
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
		.state('administrator-reports',{
			url: '/admin/reportes/miembrosProyecto',
			templateUrl: '/components/administratorEsteban/reports/projectMembers/projectMembers.view.html',
			controller: 'projectMembersController',
			controllerAs: 'projectMembCtrl'
		})
		.state('asistant-clients',{
			url: '/asis/clientes',
			templateUrl: '/components/asistantsEsteban/clients/clients.view.html',
			controller: 'clientsController',
			controllerAs: 'clientsCtrl'
		})
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
		    controllerAs:'vm'
		 })	


		.state('404',{
			url: '/404',
			templateUrl: './components/404.html'
		})
    
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);
	}

})();
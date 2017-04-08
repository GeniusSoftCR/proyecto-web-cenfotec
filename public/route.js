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
      	})

		.state('studentRequest',{
			url: '/solicitud-estudiante',
		    controller: 'studentController',
		    controllerAs: 'studentCtrl'
		})

		.state('proyectRequest',{
			url: '/solicitud-proyecto',
		    controller: 'cshReqController',
		    controllerAs: 'cshReqCtrl'
		})

		.state('logIn',{
			url: '/entrar',
			controller: 'logInController',
			controllerAs: 'vm'
		})

		.state('main',{
			url:'/inicio',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          }]
		    },			
			controller:'mainController',
			controllerAs:'vm'
		})
		
		.state('main.profile',{
			url:'/usuario',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          }]
		    },
		})
		
		.state('main.proyects',{
			url:'/proyectos',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          }]
		    },
			controller: 'loadProjectsController',
			controllerAs: 'vm'
		})

		.state('main.proyects2',{
			url:'/proyectos2',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          }]
		    },
			controller: 'projectRequestsController',
			controllerAs: 'vm'
		})

		.state('main.students',{
			url:'/estudiantes',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          }]
		    },
			controller: 'studentRequestsController',
			controllerAs: 'vm'
		})

		.state('watchProject',{
			url: '/proyectos/:proyectoId',
			views: {
				'': {
					controller: 'watchProjectController',
					controllerAs: 'watchProjectCtrl'
				},
			    'anotaciones@watchProject': { //Andres anotaciones
			    	resolve: {  
			          load: ['$ocLazyLoad', function($ocLazyLoad) { 
			          }]
				    },
			    	controller: 'projectAnotationsController',
			    	controllerAs: 'anotationsCtrl'
				},
		      	// 'estudiantes@watchProject': { //Andres asignar estudiantes
		       //  	templateUrl: 'components/projects/project/assignStudents/assignStudents.projects.view.html',
		       //  	controller: 'assignStudentsController',
		       //  	controllerAs: 'assignStudentsCtrl'
		      	// },
		      	// 'profesores@watchProject': { //Andres asignar estudiantes
		      	//   templateUrl: 'components/projects/project/assignTeachers/assignTeachers.projects.view.html',
		      	//   controller: 'assignTeachersController',
		      	//   controllerAs: 'assignTeachersCtrl'
		      	// },
				// 'header@watchProject': { //Andres asignar estudiantes
				//   templateUrl: 'components/dashboard/header/header.view.html',
				//   controller: 'headerController',
				//   controllerAs: 'headerCtrl'
				// },
				// 'menu@watchProject': { //Andres asignar estudiantes
				//   templateUrl: 'components/dashboard/menu/menu.view.html',
				//   controller: 'menuController',
				//   controllerAs: 'menuCtrl'
				// },
				'archivos@watchProject': { //Esteban archivos
					resolve: {  
			          load: ['$ocLazyLoad', function($ocLazyLoad) { 
			          }]
				    },
					controller: 'filesController',
					controllerAs: 'filesCtrl'
				}
	    	}
		})		
		.state('students',{
		       url: '/solicitudEstudiantes',
		       controller: 'studentController',
		       controllerAs: 'studentCtrl'
		     })
		 .state('registrerProfessor',{
		       url: '/registrerProfessor',
		       controller: 'userProfessorController',
		       controllerAs: 'userProfessorCtrl'
		     })

		 .state('addCareers',{
		       url: '/addCareers',
		       controller: 'addCareersController',
		       controllerAs: 'addCareersCtrl'
		     })
		 .state('registrerAssistant',{
		       url: '/registrerAssistant',
		       controller: 'userAssistantController',
		       controllerAs: 'userAssistantCtrl'
		     })
		 .state('registrerAdmi',{
		       url: '/registrerAdmi',
		       controller: 'userAdmiController',
		       controllerAs: 'userAdmiCtrl'
		     })
		.state('administrator-studentRequests',{
			url: '/admin/solicitudesEstudiantes',
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
		          ])}]
		    }, 
  		    controller:'profileController',
		    controllerAs:'vm'
		 })	


		.state('404',{
			url: '/404',
		})
    
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);
	}
})();

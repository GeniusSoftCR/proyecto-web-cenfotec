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
			templateUrl: './public/components/landing/landing.html',
			css: './public/css/landing.css'
      	})

		.state('studentRequest',{
			url: '/solicitud-estudiante',
		    templateUrl: './public/components/students/students.view.html',
		    controller: 'studentController',
		    controllerAs: 'studentCtrl'
		})

		.state('proyectRequest',{
			url: '/solicitud-proyecto',
		    templateUrl:'./public/components/projects/project/projectRequests/cshrequest.view.html',
		    controller: 'cshReqController',
		    controllerAs: 'cshReqCtrl'
		})

		.state('logIn',{
			url: '/entrar',
			templateUrl: './public/components/logIn/logIn.view.html',
			css: './public/css/logIn.styles.css',
			controller: 'logInController',
			controllerAs: 'vm'
		})

		.state('main',{
			url:'/inicio',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/main.controller.js')
	          }]
		    },			
			templateUrl: './public/components/main.html',
			controller:'mainController',
			controllerAs:'vm'
		})
		
		.state('main.profile',{
			url:'/usuario',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/projects/projects.controller.js')
	          }]
		    },
			templateUrl: './public/components/profile/profile.view.html'			
		})
		
		.state('main.proyects',{
			url:'/proyectos',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/projects/projects.controller.js')
	          }]
		    },
			templateUrl: './public/components/projects/projects.view.html',
			controller: 'loadProjectsController',
			controllerAs: 'vm'
		})

		.state('main.proyects2',{
			url:'/proyectos2',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/projects/projectRequest2/projectRequests.controller.js')
	          }]
		    },
			templateUrl: './public/components/projects/projectRequest2/projectRequests.view.html',
			controller: 'projectRequestsController',
			controllerAs: 'vm'
		})

		.state('main.students',{
			url:'/estudiantes',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/students/studentRequests.controller.js')
	          }]
		    },
			templateUrl: './public/components/students/studentRequests.view.html',
			controller: 'studentRequestsController',
			controllerAs: 'vm'
		})

		.state('main.careers',{
			url:'/carreras',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/administratorSteph/addCareers/addCareers.controller.js')
	          }]
		    },
			templateUrl: './public/components/administratorSteph/addCareers/addCareers.view.html',
			controller: 'addCareersController',
			controllerAs: 'vm'
		})

		.state('watchProject',{
			url: '/proyectos/:proyectoId',
			views: {
				'': {
					templateUrl: './public/components/projects/project/watchproject/projects.view.html',
					controller: 'watchProjectController',
					controllerAs: 'watchProjectCtrl'
				},
			    'anotaciones@watchProject': { //Andres anotaciones
			    	resolve: {  
			          load: ['$ocLazyLoad', function($ocLazyLoad) { 
			          	return $ocLazyLoad.load('./public/components/projects/project/projectAnotations/projectanotations.controller.js')
			          }]
				    },
			    	templateUrl: './public/components/projects/project/projectAnotations/projectanotations.view.html',
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
			          	return $ocLazyLoad.load('./public/components/projects/project/projectFiles-esteban/projectFiles.controller.js')
			          }]
				    },
					templateUrl: './public/components/projects/project/projectFiles-esteban/projectFiles.view.html',
					controller: 'filesController',
					controllerAs: 'filesCtrl'
				}
	    	}
		})		
		.state('students',{
		       url: '/solicitudEstudiantes',
		       templateUrl: './public/components/students/students.view.html',
		       controller: 'studentController',
		       controllerAs: 'studentCtrl'
		     })
		.state('main.users',{
			url:'/usuarios',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./public/components/administratorSteph/registerUser/userAp.controller.js')
	          }]
		    },
			templateUrl: './public/components/administratorSteph/registerUser/userAp.view.html',
			controller: 'userApController',
			controllerAs: 'vm'
		})




		 .state('registrerProfessor',{
		       url: '/registrerProfessor',
		       templateUrl: './public/components/administratorSteph/registrerProfessor/userProfessor.view.html',
		       controller: 'userProfessorController',
		       controllerAs: 'userProfessorCtrl'
		     })
		 .state('registrerAssistant',{
		       url: '/registrerAssistant',
		       templateUrl: './public/components/administratorSteph/registrerAssistant/userAssistant.view.html',
		       controller: 'userAssistantController',
		       controllerAs: 'userAssistantCtrl'
		     })
		 .state('registrerAdmi',{
		       url: '/registrerAdmi',
		       templateUrl: './public/components/administratorSteph/registrerAdmi/userAdmi.view.html',
		       controller: 'userAdmiController',
		       controllerAs: 'userAdmiCtrl'
		     })
		.state('administrator-studentRequests',{
			url: '/admin/solicitudesEstudiantes',
			templateUrl: './public/components/administratorEsteban/studentRequests/studentRequests.view.html',
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
		            './public/components/profile/profile.controller.js'
		          ])}]
		    }, 
		 	templateUrl:'./public/components/profile/profile.view.html',
  		    controller:'profileController',
		    controllerAs:'vm'
		 })	


		.state('404',{
			url: '/404',
			templateUrl: './public/components/404.html'
		})
    
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);
	}
})();
(function(){
	'use strict'
	angular
	.module('appRoutes',['ui.router','oc.lazyLoad','ngMessages'])
	.config(configuration)

	configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider,$ocLazyLoad){

		$stateProvider

		.state('landing',{
			url: '/',
			templateUrl: './components/landing/landing.html',
			css: './css/landing.css'
      	})
		.state('studentsRequest',{
		    url: '/solicitudEstudiantes',
		    resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/students/sendRequest/request.controller.js')
		    	}]
		    },
		    templateUrl: './components/users/students/sendRequest/request.view.html',
		    css: './css/studentsRequest.style.css',		    
		    controller: 'sendRequest',
		    controllerAs: 'vm'
		})
		.state('proyectRequest',{
		 	url: '/solicitudProyecto',
		     templateUrl:'./components/projects/sendRequests/requests.view.html',
		     css: './css/projectRequest.styles.css',
		     resolve: {
		     	load: ['$ocLazyLoad', function($ocLazyLoad){
		     		return $ocLazyLoad.load('./components/projects/sendRequests/requests.controller.js')
		     	}]
		     },
		     controller: 'sendRequest',
		     controllerAs: 'vm'
		})
		.state('logIn',{
			url: '/entrar',
		    resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/logIn/logIn.controller.js')
		    	}]
		    },			
			templateUrl: './components/logIn/logIn.view.html',
			css: './css/logIn.styles.css',
			controller: 'logInController',
			controllerAs: 'vm'
		})
		/*Jerarquía de estados a partir del 'main' state*/
		.state('main',{
			url:'/inicio',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/main.controller.js')
	          }]
		    },			
			templateUrl: './components/main.html',
			controller:'mainController',
			controllerAs:'vm'
		})
		.state('main.profile',{
			url:'/perfil',
		    css: './css/profile.style.css',
			templateUrl: './components/users/profile/profile.view.html',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/users/profile/profile.controller.js')
	          }]
		    },			
		})
		.state('main.projects',{
			url:'/proyectos',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load([
	          		'./components/projects/viewProject/viewProjects.controller.js',
	          		'./components/projects/resolveRequest/resolveRequest.controller.js'
	          		])
	          }]	          
		    },
			views: {
				'': {
					templateUrl: './components/projects/projects.view.html',
				},
				'resolveRequest@main.projects': {
			    	templateUrl: './components/projects/resolveRequest/resolveRequest.view.html',
					controller: 'resolveRequestController',
					controllerAs: 'vm'
				},
				'projectsList@main.projects': {
			    	templateUrl: './components/projects/viewProject/viewProjects.view.html',
					controller: 'viewProjectsController',
					controllerAs: 'vm'
				}
			}
		})
		/*DENTRO DEL PROYECTO*/
		.state('main.project',{
			url: '/proyecto/:id',
			resolve: {  
				load: ['$ocLazyLoad', function($ocLazyLoad) { 
					return $ocLazyLoad.load([
						'./components/projects/project/project.controller.js',
						'./components/projects/project/projectAnotations/anotations.controller.js',
						'./components/projects/project/projectFiles-esteban/projectFiles.controller.js'
					])
				}]
			},
			views: {
				'': {
					templateUrl: './components/projects/project/project.view.html',
					controller: 'projectController',
					controllerAs: 'vm'
				},
		   //    	'teachers@main.project': {
					// templateUrl: 'components/projects/project/assignTeachers/assignTeachers.projects.view.html',
					// controller: 'assignTeachersController',
					// controllerAs: 'assignTeachersCtrl'
		   //    	},
			    'anotaciones@main.project': {
			     	templateUrl: './components/projects/project/projectAnotations/projectanotations.view.html',
			     	controller: 'anotationsController',
			     	controllerAs: 'vm'
				},
				// 'archivos@main.project': {
				// 	templateUrl: './components/projects/project/projectFiles-esteban/projectFiles.view.html',
				// 	controller: 'filesController',
				// 	controllerAs: 'filesCtrl'
				// }
		   //    	'estudiantes@watchProject': {
		   //      	templateUrl: 'components/projects/project/assignStudents/assignStudents.projects.view.html',
		   //      	controller: 'assignStudentsController',
		   //      	controllerAs: 'assignStudentsCtrl'
		   //    	},
	    	}
		})		
		/*FIN*/
		.state('main.students',{
			url:'/estudiantes',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/users/students/resolveRequest/resolveRequest.controller.js')
	          }]
		    },
			templateUrl: './components/users/students/resolveRequest/resolveRequest.view.html',
			controller: 'studentProcessingController',
			controllerAs: 'vm'
		})

		.state('main.careers',{
		 	url:'/carreras',
		 	resolve: {  
	           load: ['$ocLazyLoad', function($ocLazyLoad) { 
	           	return $ocLazyLoad.load('./components/config/addCareers/addCareers.controller.js')
	           }]
		     },
		 	templateUrl: './components/config/addCareers/addCareers.view.html',
		 	css: './css/addCarrers.style.css',
		 	controller: 'configController',
		 	controllerAs: 'vm'
		})
		
		.state('main.users',{
			url:'/usuarios',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/users/registerUser/userAp.controller.js')
	          }]
		    },
			templateUrl: './components/users/registerUser/userAp.view.html',
			css: './css/users.css',
			controller: 'userApController',
			controllerAs: 'vm'
		})

		 /*.state('registrerProfessor',{
		       url: '/registrerProfessor',
		       templateUrl: './components/administratorSteph/registrerProfessor/userProfessor.view.html',
		       controller: 'userProfessorController',
		       controllerAs: 'userProfessorCtrl'
		     })
		 .state('registrerAssistant',{
		       url: '/registrerAssistant',
		       templateUrl: './components/administratorSteph/registrerAssistant/userAssistant.view.html',
		       controller: 'userAssistantController',
		       controllerAs: 'userAssistantCtrl'
		     })
		 .state('registrerAdmi',{
		       url: '/registrerAdmi',
		       templateUrl: './components/administratorSteph/registrerAdmi/userAdmi.view.html',
		       controller: 'userAdmiController',
		       controllerAs: 'userAdmiCtrl'
		     })*/
		.state('administrator-studentRequests',{
			url: '/admin/solicitudesEstudiantes',
			templateUrl: './components/administratorEsteban/studentRequests/studentRequests.view.html',
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
		//  .state('perfil', {
		//      url: '/perfil/:username',
		//      resolve: {  
		//           load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
		//             './components/profile/profile.controller.js'
		//           ])}]
		//     }, 
		//  	templateUrl:'./components/profile/profile.view.html',
  // 		    controller:'profileController',
		//     controllerAs:'vm'
		//  })	


		// .state('404',{
		// 	url: '/404',
		// 	templateUrl: './components/404.html'
		// })
    
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);
	}
})();
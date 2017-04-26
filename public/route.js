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
		// .state('studentsRequest',{
		//     url: '/solicitudEstudiantes',
		//     templateUrl: './components/users/students/sendRequest/request.view.html',
		//     css: './css/studentsRequest.style.css',
		//     resolve: {
		//     	load: ['$ocLazyLoad', function($ocLazyLoad){
		//     		return $ocLazyLoad.load('./components/users/students/sendRequest/request.controller.js')
		//     	}]
		//     },
		//     controller: 'sendRequest',
		//     controllerAs: 'vm'
		// })
		// .state('proyectRequest',{
		// 	url: '/solicitudProyecto',
		//     templateUrl:'./components/projects/sendRequests/sendRequests.view.html',
		//     css: './css/projectRequest.styles.css',
		//     resolve: {
		//     	load: ['$ocLazyLoad', function($ocLazyLoad){
		//     		return $ocLazyLoad.load('./components/projects/sendRequests/sendRequests.controller.js')
		//     	}]
		//     },
		//     controller: 'sendRequest',
		//     controllerAs: 'vm'
		// })
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
		.state('main.profile',{
			url:'/usuario',
		    css: './css/profile.style.css',
			templateUrl: './components/users/profile/profile.view.html',
			resolve: {  
	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	          	return $ocLazyLoad.load('./components/users/profile/profile.controller.js')
	          }]
		    },			
		})

		/*ESTADOS PARA TRABAJAR LOS PROYECTOS*/
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
		
		

		.state('main.projects',{
			url:'/proyectos',
			// templateUrl: './components/projects/projects.view.html',
			views: {
				'': {
					templateUrl: './components/projects/projects.view.html',
				},
				'projectsList@main.projects': {
			    	resolve: {  
			          load: ['$ocLazyLoad', function($ocLazyLoad) { 
			          	return $ocLazyLoad.load('./components/projects/viewProject/viewProjects.controller.js')
			          }]
				    },
			    	templateUrl: './components/projects/viewProject/viewProjects.view.html',
					controller: 'loadProjectsController',
					controllerAs: 'vm'
				},
			}
		})
		// .state('main.projects.viewProjects',{
		// 	url:'/todos',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/projects/viewProject/viewProjects.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/projects/viewProject/viewProjects.view.html',
		// 	controller: 'loadProjectsController',
		// 	controllerAs: 'vm'
		// })
		// .state('main.projects2',{
		// 	url:'/proyectos2',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/projects/projectRequest2/projectRequests.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/projects/projectRequest2/projectRequests.view.html',
		// 	controller: 'projectRequestsController',
		// 	controllerAs: 'vm'
		// })
		// .state('main.projects.project',{
		// 	url: '/proyecto/:proyectoId',
		// 	views: {
		// 		'': {
		// 			templateUrl: './components/projects/project/watchproject/projects.view.html',
		// 			controller: 'watchProjectController',
		// 			controllerAs: 'watchProjectCtrl',
		// 			resolve: {  
	 //          			load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          				return $ocLazyLoad.load('./components/projects/project/watchproject/projects.controller.js')
	 //         		 }]
		//    		 },
		// 		},
		// 	    'anotaciones@main.projects.project': { //Andres anotaciones
		// 	    	resolve: {  
		// 	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
		// 	          	return $ocLazyLoad.load('./components/projects/project/projectAnotations/projectanotations.controller.js')
		// 	          }]
		// 		    },
		// 	    	templateUrl: './components/projects/project/projectAnotations/projectanotations.view.html',
		// 	    	controller: 'projectAnotationsController',
		// 	    	controllerAs: 'anotationsCtrl'
		// 		},
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
		// 		'archivos@main.projects.project': { //Esteban archivos
		// 			resolve: {  
		// 	          load: ['$ocLazyLoad', function($ocLazyLoad) { 
		// 	          	return $ocLazyLoad.load('./components/projects/project/projectFiles-esteban/projectFiles.controller.js')
		// 	          }]
		// 		    },
		// 			templateUrl: './components/projects/project/projectFiles-esteban/projectFiles.view.html',
		// 			controller: 'filesController',
		// 			controllerAs: 'filesCtrl'
		// 		}
	 //    	}
		// })		

		// .state('main.students',{
		// 	url:'/estudiantes',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/studentsProcessing/studentsProcessing.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/studentsProcessing/studentsProcessing.view.html',
		// 	controller: 'studentProcessingController',
		// 	controllerAs: 'vm'
		// })

		// .state('main.careers',{
		// 	url:'/carreras',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/administratorSteph/addCareers/addCareers.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/administratorSteph/addCareers/addCareers.view.html',
		// 	controller: 'addCareersController',
		// 	controllerAs: 'vm'
		// })
		
		// .state('main.users',{
		// 	url:'/usuarios',
		// 	resolve: {  
	 //          load: ['$ocLazyLoad', function($ocLazyLoad) { 
	 //          	return $ocLazyLoad.load('./components/administratorSteph/registerUser/userAp.controller.js')
	 //          }]
		//     },
		// 	templateUrl: './components/administratorSteph/registerUser/userAp.view.html',
		// 	css: './css/users.css',
		// 	controller: 'userApController',
		// 	controllerAs: 'vm'
		// })

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
		     })
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
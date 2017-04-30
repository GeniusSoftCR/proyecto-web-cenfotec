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
						'./components/projects/project/projectAnotations/projectanotations.controller.js',
						'./components/projects/project/projectFiles/projectFiles.controller.js'
					])
				}]
			},
			views: {
				'': {
					templateUrl: './components/projects/project/project.view.html',
					controller: 'projectController',
					controllerAs: 'vm'
				},
		      	'teachers@main.project': {
					templateUrl: 'components/projects/project/assignTeachers/assignTeachers.view.html',
					controller: 'assignTeachersController',
					controllerAs: 'vm'
		      	}
			 //    'anotaciones@main.project': {
			 //    	templateUrl: './components/projects/project/projectAnotations/projectanotations.view.html',
			 //    	controller: 'projectAnotationsController',
			 //    	controllerAs: 'anotationsCtrl'
				// },
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
		
		//  .state('perfil', {
		//      url: '/perfil/:username',
		//      resolve: {  
		//           load: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load([
		//             './components/profile/profile.controller.js'
		//           ])}]
		//     }, 
		//  	templateUrl:'./components/profile/profile.view.html',
  		// 		controller:'profileController',
		//     	controllerAs:'vm'
		//  })	


		// .state('404',{
		// 	url: '/404',
		// 	templateUrl: './components/404.html'
		// })
    
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);
	}
})();
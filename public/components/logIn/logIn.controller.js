(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$timeout','$log','$http','$location','$rootScope','AUTH_EVENTS','AuthService','SessionService'];

 	function logInController ($timeout,$log,$http,$location,$rootScope,AUTH_EVENTS,AuthService,SessionService){

 		// if(AuthService.isAuth()){
 		// 	$location.path('/inicio/perfil');
 		// }else{
 		// 	$location.path('/entrar'); 			
 		// }
 		//vm = view model
		var vm = this;
		vm.loading = false;
		vm.hideModal = function () {
			$('#modal').modal('show');
		};

		vm.user = {};
		vm.user.username = 'hmurillop' 
		vm.user.password = 'Angular1';
		
		vm.logIn = function(credentials){ 

			credentials.username = credentials.username.split('@ucenfotec.ac.cr',1)[0];

			document.body.style.cursor='wait';
			vm.loading = true;

			AuthService.logIn(credentials).then(function (res) {
				document.body.style.cursor='default';
				vm.loading = false;		
				if (!res.data.error) {
					SessionService.create(res.data)
					$log.info("Login success: "+ res.data.user.username);	
					$log.info("token : "+ res.data.token);							         
	       			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);   		        
	      			$location.path('/inicio/perfil');
			
				}else{
					vm.modal.config('logIn');
					$('#modal').modal('show');
					
					vm.modal.tittle = "Inicio de sesión";
					vm.modal.body = res.data.error;
					vm.user.password='';
					console.log(res.data.error);
					$log.error("Login failed");
		        	$rootScope.$broadcast(AUTH_EVENTS.loginFailed);

		        	$timeout(function () {$('#modal').modal('hide');},1850);

		        	$location.path('/entrar');
				}
			});	
	    };
	    vm.modal = {
	    	config:function (type) {
	    		vm.modal.type = type;
	    		switch(vm.modal.type){
	    			case 'forgot':
	    				vm.modal.title = "Recuperar contraseña";
	    				vm.modal.body = "Para recuperar su contraseña introduzca su correo electrónico";
	    			break;
	    			case 'logIn':
	    				vm.modal.title = "Error al inciar sesión";	    				
	    			break;
	    		}
	    	}
	    };
	}
})();

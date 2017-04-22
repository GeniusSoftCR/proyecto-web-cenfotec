(function () {
	'use strict';

	angular.module('cshApp')
	.controller('logInController',logInController);

	logInController.$inject = ['$log','$http','$location','$rootScope','AUTH_EVENTS','AuthService','SessionService'];

 	function logInController ($log,$http,$location,$rootScope,AUTH_EVENTS,AuthService,SessionService){

 		// if(AuthService.isAuth()){
 		// 	var authUser = AuthService.getAuthUser();
 			
 		// 	$location.path('/inicio/usuario');
 		// }else{
 		// 	$location.path('/entrar');
 		// }
 		//vm = view model
		var vm = this;
		vm.loading = false;

		vm.user = {};

		vm.logIn = function(credentials){ 
			document.body.style.cursor='wait';
			vm.loading = true;

			AuthService.logIn(credentials).then(function (res) {
				document.body.style.cursor='default';
				vm.loading = false;		
				if (!res.data.error) {
					console.log(res.data)

					$log.info("Login success: "+ res.data.username);		         
       				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);   		        
      				$location.path('/inicio/usuario');
      				SessionService.create(res.data)					
				}else{
					vm.modal.config('logIn');
					$('#modal').modal('show');

					vm.modal.tittle = "Inicio de sesión"
					vm.modal.body = res.data.error
					vm.user.password='';
					console.log(res.data.error)

					$log.error("Login failed")
		        	$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		        	$location.path('/entrar');
		        	SessionService.create(request)
				};
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
	    		};
	    	}
	    }
	};
})();
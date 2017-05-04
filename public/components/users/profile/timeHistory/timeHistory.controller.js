(function () {
	'use strict';
	angular.module('cshApp')
	.controller('timeHistoryController',  timeHistoryController);

	 timeHistoryController.$inject = ['$q','$interval','AuthService','userService'];

 	function timeHistoryController ($q,$interval,AuthService,userService){
	
		///////////////////////////////////////////////////////////////
		///// + PRIVATE +/////////////////////////////////////////////
		/////////////////////////////////////////////////////////////
		var user = AuthService.getAuthUser();	
		var fetchData 	= _fetchData;	
		var sync 		= _sync();				
		//
		function _fetchData() {
			userService.getUsers({_id:user._id}).then(function (res) {
				user = res.data[0];
				sync.user(user);
			});
		}
		//
		fetchData();
		///
		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////
		//		

 		//vm = view model
		var vm = this;
		vm.loading= true;
		vm.socket = io('http://localhost:3000');	 

		vm.socket.on('trackUpdate', function (data) {
			console.log('Track updated');
			vm.lading= true;
			fetchData();
	  	});

		
		vm.user ={};

		//
		function _sync() {
			var sync = {};
			//
			sync.user = _syncUser;			
			//
			function _syncUser(userFresh) {
				vm.loading = true;
				vm.user = userFresh;
				vm.user.timeTrack.reverse();
				vm.loading = false;
				return true;
			}
			return sync;
		}	

	}
})();



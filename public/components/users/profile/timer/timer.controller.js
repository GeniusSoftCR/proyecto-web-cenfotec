(function () {
	'use strict';

	angular.module('cshApp')
	.controller('timerController', timerController);

	timerController.$inject = ['$q','$interval','$timeout','AuthService','projectService','userService'];


 	function timerController ($q,$interval,$timeout,AuthService,projectService,userService){

		var countInterval = {};
		///////////////////////////////////////////////////////////////
		///// + PRIVATE +/////////////////////////////////////////////
		/////////////////////////////////////////////////////////////
		var projects 	= {};
		var user = AuthService.getAuthUser();
		///
		var fetchData 	= _fetchData;	
		var sync 		= _sync();
		//
		///
		function _fetchData() {
			projectService.getProjects({students:{_id:user._id}}).then(function (res) {
				projects = res.data;
				sync.projects();
			});
		}
		fetchData();
		///
		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////
		//

		//vm = view modal (like $scope)
		var vm = this;
		vm.user =  user;
		vm.loading 	= true;

	  	vm.socket = io('http://localhost:3000');	 

		function _sync() {
			var sync = {};
			//
			sync.projects = _syncProjects;			
			//
			function _syncProjects() {
				vm.projects = projects || {};
				vm.loading = false;
				return true;
			}
			return sync;
		}


		//////////////////////////////////////////////////////////////
		///// + DEFAULTS +///////////////////////////////////////////
		//
		////// - object /////////////
		vm.time = {};
		////// - boolean ////////////
		vm.counting = false;
		vm.showCero 		= true;
		vm.counting 		= false;
		vm.taskSearchState 	= false;		
		////// - string /////////////
		vm.time.hours 	= '0';
		vm.time.mins	= '0';
		vm.time.secs	='0';	
		////////////////////////////////+ END DEAFULTS +/////
		////////////////////////////////////////////////////

		///////////////////////////////////////////////////////////////
		///// + PUBLIC FUNCTIONS +////////////////////////////////////

		//-counter
		vm.startCount 	= _startCount;
		vm.stopCount   	=  _stopCount;
		//-projects
		vm.pickProject 	= _pickProject;
		vm.setProject 	= _setProject;

		vm.data = {};

	  	vm.socket.on('news', function (data) {
		    console.log(data);
		    vm.socket.emit('echo',{msg:'Hello server-timer'});
	  	});		


	  	vm.socket.on('timer', function (data) {
	  		vm.data = data;
		    console.log(data);
	  	});

		function _startCount() 
		{
			var data = {};
			data.user = {};
			data.project = {};

			data.user = vm.user;
			data.project._id = vm.project._id;
			data.task = vm.task;

			vm.counting = true;
			//
			userService.trackTime(data);
			//
			//private
			function _track(obj)
			{
				// socket.emit('echo',{msg:'Hello obj'});
				// console.log(obj);
			}

		}
		function _stopCount() {
			vm.counting = !vm.counting;
		}
		function _pickProject() {
			vm.taskSearchState = !vm.taskSearchState;

			if (vm.taskSearchState) {
				vm.loading = true;
				fetchData();
			}
		}
		function _setProject(id) {	
			vm.taskSearchState = !vm.taskSearchState;		
			projectService.getProjects({_id:id}).then(function (res) {
				vm.project = res.data[0];
			});
		}
	}
})();



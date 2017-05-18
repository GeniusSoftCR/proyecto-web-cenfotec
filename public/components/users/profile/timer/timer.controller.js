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
				vm.loading 	= true;
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
		vm.data = {};
		vm.data.user = {};
		vm.data.project = {};
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

		//
		vm.startCount 	= _startCount;
		vm.stopCount   	=  _stopCount;
		//-projects
		vm.pickProject 	= _pickProject;
		vm.setProject 	= _setProject;
		//
		vm.trackPulse = null;
		vm.trackStart = _trackStart;

	  	vm.socket.on('news', function (data) {
		    // console.log(data);
		    vm.socket.emit('echo',{msg:'Hello server-timer'});
	  	});		

	  	vm.socket.on('trackStart', function (data) {
		    // console.log(data);

	  	});			  	

	  	vm.socket.on('trackStop', function (data) {
		    // console.log(data);
	  	});		


		function _startCount() 
		{
			vm.data.start = true;
			vm.data.user = vm.user;
			vm.data.project._id = vm.project._id;
			vm.data.task = vm.task;
			vm.counting = true;

			vm.trackStart();
			//
			userService.trackTime(vm.data);
			//
			//private
		}
		function _trackStart() {
			vm.trackPulse = $interval(_trackPulse,1000);
		}

		function _trackPulse() {

			if (vm.time.secs  < '9') {
				vm.showCero = false;
				vm.time.secs =  '0'+vm.time.secs;
			}else{vm.showCero = true;}
			vm.time.secs++;
			if (vm.time.secs == '60') {
				vm.time.secs = 0;
				vm.time.mins++;					
			}
			if (vm.time.mins == '60') {
				vm.time.hours++;
				vm.time.mins = 0;
			};	

			vm.data.time = vm.time;

			console.log(vm.data.time)
		}
		function _stopCount() {

			vm.data.start = false;
			vm.data.user = vm.user;
			vm.data.project._id = vm.project._id;
			vm.data.task = vm.task;

			vm.counting = true;		

			console.log(vm.data);

			$interval.cancel(vm.trackPulse);
			userService.trackTime(vm.data);

			vm.project = undefined;
			vm.task = undefined;
			vm.time.mins = '0';
			vm.time.secs = '0';
			vm.time.hours = '0';
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



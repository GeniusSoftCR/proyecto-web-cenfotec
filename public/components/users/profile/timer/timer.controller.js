(function () {
	'use strict';

	angular.module('cshApp')
	.controller('timerController', timerController);

	timerController.$inject = ['$q','$interval','$timeout','AuthService','projectService','userService'];


 	function timerController ($q,$interval,$timeout,AuthService,projectService,userService){

	  var socket = io('http://localhost:3000');

	  socket.on('news', function (data) {
	    console.log(data);
	    socket.emit('my other event', { my: 'data' });
	  });

		var countInterval = {};
		///////////////////////////////////////////////////////////////
		///// + PRIVATE +/////////////////////////////////////////////
		/////////////////////////////////////////////////////////////
		var projects 	= {};
		var user 		= {};
		///
		var fetchData 	= _fetchData;	
		var sync 		= _sync();
		///
		function _fetchData() {
			user =  AuthService.getAuthUser();
			projectService.getProjects({students:{_id:user._id}}).then(function (res) {
				projects = res.data;
				sync.projects();
			});
		}
		///
		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////
		//
		fetchData();
		//vm = view modal (like $scope)
		var vm = this;
		//
		vm.loading 	= true;
		///
		function _sync() {
			var sync = {};
				sync.user 	  = _syncUser;
				sync.projects = _syncProjects;			
			////
			function _syncUser() {
				vm.user = user || {};
				vm.loading = false;
				console.log("hello")
				return true;
			}
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
		vm.stopCount   	= _stopCount;
		//-projects
		vm.pickProject 	= _pickProject;
		vm.setProject 	= _setProject;

		function _startCount() 
		{
			//private\
			var pulseTime = 100; // 1000 = 1 seg
			var track = _track;
			vm.counting = true;	

			countInterval = $interval(_counter,pulseTime);

			//private
			function _track(obj)
			{

				console.log(obj);
			}

			function _counter() 
			{			
				if (vm.time.secs >= '9') {vm.showCero = false;}else{vm.showCero = true;}

				vm.time.secs++;

				if (vm.time.secs == '60') {
					vm.time.secs = 0;
					vm.time.mins++;
					track(vm.time);
				}

				if (vm.time.mins == '60') {
					vm.time.hours++;
					vm.time.mins = 0;
					track(vm.time);
				}
			}
		}
		function _stopCount() {
			vm.counting = false;
			$interval.cancel(countInterval);
			vm.time.hour = '0';
			vm.time.min = '0';
			vm.time.sec='0';
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



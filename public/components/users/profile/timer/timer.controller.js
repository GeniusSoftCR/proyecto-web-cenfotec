(function () {
	'use strict';

	angular.module('cshApp')
	.controller('timerController', timerController);

	timerController.$inject = ['$q','$interval','AuthService','projectService','userService'];

 	function timerController($q,$interval,AuthService,projectService,userService){

		///////////////////////////////////////////////////////////////
		///// + PRIVATE +/////////////////////////////////////////////
		/////////////////////////////////////////////////////////////
		var projects 	= {};
		var user 		= {};
		var fetchData 	= _fetchData();	
		var syncVm 	= _syncVm;

		$q.all([
			

		])


		function _fetchData() {

			var data = [_proyectsPromise];

			function _proyectsPromise() {
				return projectService.getProjects({students:{_id:user._id}})
			}

			// projects = res.data;
			// syncVm();


			user =  AuthService.getAuthUser();
			projectService.getProjects({students:{_id:user._id}}).then(function (res) {
				projects = res.data;
				syncVm();
			});
		};

		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////

		//vm = view modal (like $scope)
		var vm = this;

		function _syncVm() {
			vm.user 	= user || {};
			vm.projects = projects || {};
		}


		//////////////////////////////////////////////////////////////
		///// + DEFAULTS +///////////////////////////////////////////
		//
		////// - object /////////////
		vm.time = {};
		////// - boolean ////////////

		vm.taskSearchState = false;
		vm.showCero = true;
		vm.counting = false;
		////// - string /////////////
		vm.time.hours = '0';
		vm.time.mins = '0';
		vm.time.secs='0';
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




		vm.msg = function () {
			return 'hello';
		}


		function _startCount() {
			//private\
			var pulseTime = 1; // 1000 = 1 seg
			var track = _track;
			vm.counting = true;	

			$interval(_counter,pulseTime);			

			//private
			function _track(obj) {
				console.log(obj);
			}
			function _counter () 
			{			

				if (vm.time.secs >= '9') {vm.showCero = false;}else{vm.showCero = true;}

				vm.time.secs++

				if (vm.time.secs == '60') {
					vm.time.secs = 0;
					vm.time.mins++;
					track(vm.time);
				};				

				if (vm.time.mins == '60') {
					vm.time.hours++;
					vm.time.mins = 0;
					track(vm.time);
				};				
			};
		};
		function _stopCount() {
			vm.counting = false;
		}
		function _pickProject() {
			vm.taskSearchState = !vm.taskSearchState;
		}
		function _setProject(id) {	
			vm.taskSearchState = !vm.taskSearchState;		
			projectService.getProjects({_id:id}).then(function (res) {
				$q.when(res).then(function () {
					vm.project = res.data[0];
				});
			});
		};
	};
})();



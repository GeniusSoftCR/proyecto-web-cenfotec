(function () {
	'use strict';

	angular.module('cshApp')
	.controller('timerController', timerController);

	timerController.$inject = ['$q','$interval','AuthService','projectService'];

 	function timerController ($q,$interval,AuthService,projectService){
	
 		//vm = view model
		var vm = this;
		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////
		vm.user = AuthService.getAuthUser();


		projectService.getProjects({students:{_id:vm.user._id}}).then(function (res) {
			$q.when(res).then(function (err) {

				console.log(res)
				vm.projects = res.data;
			});
		});

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
		vm.time.hour = '0';
		vm.time.min = '0';
		vm.time.sec='0';
		////////////////////////////////+ END DEAFULTS +/////
		////////////////////////////////////////////////////

		///////////////////////////////////////////////////////////////
		///// + PUBLIC FUNCTIONS +////////////////////////////////////
		/////////////////////////////////////////////////////////////
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
			var pulseTime = 1000; // 1000 = 1 seg

			//public
			vm.counting = true;

			$interval(_counter,pulseTime)

			function _counter () 
			{
				if (vm.time.sec >= '9') {vm.showCero = false;}else{vm.showCero = true;}

				vm.time.sec++

				if (vm.time.sec == '60') {
					vm.time.sec = '0';
					vm.time.min++;
				};				

				if (vm.time.min == '60') {
					vm.time.hour++;
					vm.time.min = '00';
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



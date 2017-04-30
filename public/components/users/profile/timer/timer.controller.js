(function () {
	'use strict';

	angular.module('cshApp')
	.controller('timerController', timerController);

	timerController.$inject = ['$q','$interval','projectService','AuthService'];

 	function timerController ($q,$interval,projectService,AuthService){
	
 		//vm = view model
		var vm = this;
		///////////////////////////////////////////////////////////////
		///// + VM DEPENDENCIES && DECLARATIONS +/////////////////////
		/////////////////////////////////////////////////////////////
		vm.user = AuthService.getAuthUser();

		///////////////////////////////////////////////////////////////
		///// + PUBLIC FUNCTIONS +////////////////////////////////////
		/////////////////////////////////////////////////////////////
		vm.startCount = _startCount;
		vm.stopCount = _stopCount;
		vm.setProject = _setProject;

		//////////////////////////////////////////////////////////////
		///// + DEFAULTS +///////////////////////////////////////////
		vm.time = {};

		projectService.getProjects({students:{_id:vm.user._id}}).then(function (res) {
			$q.when(res).then(function () {
				console.log(res)
				vm.projects = res.data;
			});
		});
		////// + bool /////////////////////////////////////////////
		vm.taskSearchState = false;
		vm.showCero = true;
		vm.counting = false;

		////// + string ////////////////////////////////////////
		vm.time.hour = '0';
		vm.time.min = '0';
		vm.time.sec='0';

		////////////////////////////////+ END DEAFULTS +/////
		////////////////////////////////////////////////////



		function _startCount() {
			vm.counting = true;
			$interval(function () {
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

			},1000)
		};
		function _stopCount() {
			vm.counting = false;
		}
		function _setProject(id) {
			projectService.getProjects({_id:id}).then(function (res) {
				$q.when(res).then(function () {
					vm.project = res.data[0];
				});
			});
		};
	};
})();



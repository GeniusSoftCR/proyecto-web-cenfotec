(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents)
  .filter('startFrom', pagination);

  assignStudents.$inject = ['$q','$stateParams','projectService', 'userService'];

  function assignStudents ($q, $stateParams, projectService, userServ) {
    var vm = this;
    vm.project = {};
    vm.add = false;
    vm.del = false;

    //proyecto actual
    projectService.getProjects({_id:$stateParams.id}).then(function(res){
      vm.project = res.data[0];
      init();
    });
  };
})();
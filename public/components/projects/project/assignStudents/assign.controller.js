(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents)


  assignStudents.$inject = ['$q','$stateParams','projectService', 'userService'];

  function assignStudents ($q, $stateParams, projectService, userService) {
    var vm = this;
    vm.project = {};
    vm.students = {};
    vm.add = false;
    vm.del = false;

    //trae el proyecto actual
    projectService.getProjects({_id:$stateParams.id}).then(function (res) {
      vm.project=res.data[0];
    });
    //traer lista de esudiantes
    userService.getUsers({"role":"student", "state":["active" ,"eligible"]}).then(function (res) {
      vm.students = res.data;

    });

      
  };
})();
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

    //traer lista de esudiantes
    //{ $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
    userService.getUsers({"role":"student", "state":["active" ,"eligible"]}).then(function (res) {
      vm.students = res.data;
      init();
    });

      /*projectService.getProjects({_id:$stateParams.id}).then(function (res) {
        vm.project=res.data[0];
        init();
      });*/

      function init(){
        console.log(vm.students);
      }
  };
})();
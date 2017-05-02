(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents)


  assignStudents.$inject = ['$q','$stateParams','projectService', 'userService','AuthService'];

  function assignStudents ($q, $stateParams, projectService,userService,AuthService) {
    var vm = this;
    vm.user = AuthService.getAuthUser();
    vm.project = {};
    vm.students = {};
    vm.add = false;
    vm.del = false;

    projectService.getProjects({_id:$stateParams.id}).then(function (res) {
      vm.project=res.data[0];
    });    

    //traer lista de esudiantes
    userService.getUsers({"role":"student", "state":["active" ,"eligible"]}).then(function (res) {
      vm.students = res.data;
    });

    vm.addStudent = function(student){
      var newStudent = {};
      newStudent._id = student._id;
      vm.project.students.push(newStudent);
      projectService.updateProject(vm.project).then(function(res){
      })
      console.log(student);
    };
  };
})();
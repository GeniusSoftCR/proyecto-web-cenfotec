(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents);

  assignStudents.$inject['$window', '$http', '$q', 'userService', 'projectService'];

  function assignStudents ($window, $http, $q, userService, projectService){
    var vm = this;
    vm.students = {};
    vm.projects = {};

    vm.getStudents = function(){
      //
    };
  };
})();
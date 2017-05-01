(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents)
  .filter('startFrom', pagination);

  assignStudents.$inject = ['$q','$stateParams','projectService', 'userService'];

  function assignStudents ($q, $stateParams, projectService, userServ) {
    var vm = this;
  };
})();
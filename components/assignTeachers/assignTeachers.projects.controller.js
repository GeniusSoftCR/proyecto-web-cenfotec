(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersCtrl);

    function assignTeachersCtrl ($scope, assignTeachersService) {
      var assignTeachersCtrl = this;
      
      function init(){ 
        anotationsCtrl.teachers = assignTeachersService.getTeachers();
      }

    }
})();
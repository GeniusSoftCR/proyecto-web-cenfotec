(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('headerController', headerCtrl);

    function headerCtrl ($scope) {
      var headerCtrl = this;
      headerCtrl.menuOpenorClose = function (event){
        var jQueryElement = angular.element(event.target);
        console.log(jQueryElement);
      }
      
    }
})();
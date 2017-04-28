(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('configController', configController);

  configController.$inject = ['$scope', 'Upload', 'configService', 'SessionService'];

  function configController($scope, Upload, configService, SessionService){
    var vm = this;
    vm.carrer = {};
    vm.modal = {};

    vm.save = function(newCareer){
      console.log(newCareer);
      configService.addCarrers(newCareer).then(function(res){
        console.log(res);
        vm.carrer = {};
        vm.modal.title = 'Agregar nueva carreras';
        vm.modal.body = res.data.massage;
      });
    }
  }
})()



/*
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        addCareersCtrl.careerList = addCareersService.getCareer();
      }
      init();


        console.log(newCareer);
        
        addCareersService.addCareer(newCareer);

        addCareersCtrl.id = null;
        addCareersCtrl.nameCareer = null;
        addCareersCtrl.grade = null;

      }


      addCareersCtrl.deleteCareer = function (index) {
        console.log(index);
        addCareersService.deleteCareer(index);
      }

    }
     //se establece un objeto de angular normal

})();
*/
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
    vm.careers = {};

    vm.save = function(newCareer){
      console.log(newCareer);
      configService.addCarrer(newCareer).then(function(res){
        console.log(res);
        vm.carrer = {};
        vm.modal.title = 'Agregar nueva carreras';
        vm.modal.body = res.data.massage;
      });
    };

    configService.getCarrers().then(function(res){
      vm.careers = res.data;
    });

    vm.deleteCareer = function(Deletedcareer){
      console.log(Deletedcareer);
      configService.deleteCareer(Deletedcareer).then(function(res){
        console.log(res);
      });
    }
  }
})();
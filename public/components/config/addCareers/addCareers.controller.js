(function(){
  'use strict'
  angular
  .module('cshApp')
  .controller('configController', configController);

  configController.$inject = ['$scope', 'Upload', 'carrersService'];

  function configController($scope, Upload, carrersService){
    var vm = this;

    vm.save = function(){
      var newCarrer = {
        code : vm.carrerCode,
        name : vm.carrerName,
        degree : vm.carrerDegree
      };
      console.log(newCarrer);
      carrersService.addCarrers(newCarrer).then(function(res){
        console.log(res);
      });
      vm.carrerCode = null;
      vm.carrerName = null;
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
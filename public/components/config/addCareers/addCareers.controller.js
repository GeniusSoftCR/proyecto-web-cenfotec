(function(){
  angular
    .module('cshApp')
    .controller('addCareersController', addCareersController);
    
    addCareersController.$inject = ['$scope','addCareersService','Upload','localStorageService'];

    
    function addCareersController($scope, addCareersService,Upload, localStorageService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      

      var addCareersCtrl = this; //binding del controlador con el html, solo en el controlador
      


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        addCareersCtrl.careerList = addCareersService.getCareer();
      }
      init();


      addCareersCtrl.save= function(){
        var newCareer ={

          id : addCareersCtrl.id,
          nameCareer : addCareersCtrl.nameCareer,
          grade : addCareersCtrl.grade
        }

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

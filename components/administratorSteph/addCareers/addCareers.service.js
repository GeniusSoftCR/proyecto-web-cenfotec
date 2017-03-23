(function(){
  angular
  .module('cshApp')
  .service('addCareersService', addCareersService);

  addCareersService.$inject = ['$http','localStorageService'];

  function addCareersService($http,localStorageService){
    var career = [{}];

    var publicAPI = {
        addCareer : _addCareer,
        getCareer : _getCareer
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones



    function _addCareer(pCareer){
      //users.push(pUser);
      career.push(pCareer);
      localStorageService.set('localCareers',career);
      console.log(localStorageService.get('localCareers'))
    }

    function _getCareer(){
        var listaStored = localStorageService.get('localCareers');
      if (listaStored == null ) {
        career = [];
      }else {
        career = listaStored;
      };
      return listaStored;
    }
  
  }
})();
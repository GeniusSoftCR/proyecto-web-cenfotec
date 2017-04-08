(function(){
  angular
  .module('cshApp')
  .service('userAdmiService', userAdmiService);
  
  userAdmiService.$inject = ['$log','$http','localStorageService'];

  /*Servicio para profesores y asistentes*/
  function userAdmiService($log,$http,localStorageService){
    /*Servicio para profesores*/
    var userAdmis = [];

    var publicAPI = {
        addAdmi : _addAdmi,
        getAdmi: _getAdmi,
        getAdmis: _getAdmis,
        deleteAdmi : _deleteAdmi,
        setLocalAdmiEdited : _setLocalAdmiEdited
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    /*Profesores*/
    function _addAdmi(pUserAdmi){
      //users.push(pUser);
      $log.info(pUserAdmi)
      var userAdmis = _getAdmis();
      userAdmis.push(pUserAdmi);
      $log.info(userAdmis);
      localStorageService.set('localAdmis',userAdmis);
    }

    function _deleteAdmi (pIndex) {
      console.log(pIndex)

      localStorageService.remove(pIndex)
      userAdmis.splice(pIndex, 1);
      localStorageService.set('localAdmis',userAdmis);

    }
     /*Profesores*/
    function _getAdmi(index){
      var listaStored = localStorageService.get('localAdmis');


        $log.info('_getAdmi---'+listaStored)


        angular.forEach(listaStored, function(admi) {


          console.log('admi----'+admi.index);


          if (admi.index === index) {
            return admi;
          }

        })
      }
  

    function _getAdmis(){
      console.log(localStorageService.get('localAdmis'));
      var listaStored = localStorageService.get('localAdmis');
      if (listaStored == null ) {
        userAdmis = [];
      }else {
        userAdmis = listaStored;
      };
      return userAdmis;
    }

    function _setLocalAdmiEdited(pNewUserAdmi) {
      localStorageService.set(['localAdmis'],pNewUserAdmi);
    }
   
  }
})();
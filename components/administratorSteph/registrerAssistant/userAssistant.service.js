(function(){
  angular
  .module('cshApp')
  .service('userAsistService', userAsistService);
  
  userAsistService.$inject = ['$log','$http','localStorageService'];

  /*Servicio para profesores y asistentes*/
  function userAsistService($log,$http,localStorageService){
    /*Servicio para profesores*/
    var userAssistants = [];

    var publicAPI = {
        addAssistant : _addAssistant,
        getAssistant: _getAssistant,
        getAssistants: _getAssistants,
         deleteAssit : _deleteAssit,
        setLocalAsistfEdited : _setLocalAsistfEdited
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    /*Profesores*/
    function _addAssistant(pUserAssistants){
      //users.push(pUser);
      $log.info(pUserAssistants)
      var userAssistants = _getAssistants();
      userAssistants.push(pUserAssistants);
      $log.info(userAssistants);
      localStorageService.set('localAssistants',userAssistants);
    }

    function _deleteAssit (pIndex) {
      console.log(pIndex)

      localStorageService.remove(pIndex)
      userAssistants.splice(pIndex, 1);
      localStorageService.set('localAssistants',userAssistants);

    }
     /*Profesores*/
    function _getAssistant(index){
      var listaStored = localStorageService.get('localAssistants');


        $log.info('_getAssistant---'+listaStored)


        angular.forEach(listaStored, function(assistant) {


          console.log('assistant----'+assistant.index);


          if (assistant.index === index) {
            return assistant;
          }

        })
      }
  

    function _getAssistants(){
      console.log(localStorageService.get('localAssistants'));
      var listaStored = localStorageService.get('localAssistants');
      if (listaStored == null ) {
        userAssistants = [];
      }else {
        userAssistants = listaStored;
      };
      return userAssistants;
    }

    function _setLocalAsistfEdited(pNewUserAssistant) {
      localStorageService.set(['localAssistants'],pNewUserAssistant);
    }
   
  }
})();
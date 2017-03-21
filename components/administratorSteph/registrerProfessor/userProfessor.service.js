(function(){
  angular
  .module('cshApp')
  .service('userProfessorService', userProfessorService);
  
  userProfessorService.$inject = ['$log','$http','localStorageService'];

  /*Servicio para profesores y asistentes*/
  function userProfessorService($log,$http,localStorageService){
    /*Servicio para profesores*/
    var userProfessors = [
      {name: "Hector", lastName: "Orksd", surName: "tht", specialty: "hth", email: 'ffd@gmail.com'},
      {name: "Baby", lastName: "Orksd", surName: "tht", specialty: "hth", email: 'baby@gmail.com'}
    ]

    var publicAPI = {
        addProfessor : _addProfessor,
        //getProfessor: _getProfessor,
        getProfessors: _getProfessors,
        deleteProfessor : _deleteProfessor,
        updateProfessor : _updateProfessor
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    /*Profesores*/
    function _addProfessor(pUserProfessor){
      //users.push(pUser);
      $log.info(pUserProfessor)
      var userProfessors = _getProfessors();
      userProfessors.push(pUserProfessor);
      $log.info(userProfessors);
      localStorageService.set('localProfessors',userProfessors);
    }

    function _deleteProfessor (pIndex) {
      console.log(pIndex)

      localStorageService.remove(pIndex)
      userProfessors.splice(pIndex, 1);
      localStorageService.set('localProfessors',userProfessors);

    }
     /*Profesores*/
    function _getProfessor(index){
      var listaStored = localStorageService.get('localProfessors');


        $log.info('_getProfessor---'+listaStored)


        angular.forEach(listaStored, function(professor) {


          console.log('professor----'+professor.index);


          if (professor.index === index) {
            return professor;
          }

        })
      }
  

    function _getProfessors(){
      console.log(localStorageService.get('localProfessors'));
      var listaStored = localStorageService.get('localProfessors');
      if (listaStored == null ) {
        userProfessors = [];
      }else {
        userProfessors = listaStored;
      };
      return userProfessors;
    }

    function _updateProfessor(pItemProfChange,index) {
        var i = null;

        angular.forEach(userProfessors, function(professor, position) {
        if (professor.mail === mail) {
        i = position;
        //  }
        //});
        userProfessors[index]=pItemProfChange;
        }
      })
    }
  }
})();
(function(){
  angular
  .module('cshApp')
  .service('userProfessorService', userProfessorService);

  /*Servicio para profesores y asistentes*/
  function userProfessorService(){
    /*Servicio para profesores*/
    var userProfessor = [
    {name: "Hector", lastName: "Orksd", surName: "tht", specialty: "hth", email: 'ffd@gmail.com'}
    ];
    var publicAPI = {
        addProfessor : _addProfessor,
        getProfessor: _getProfessor,
        deleteProfessor : _deleteProfessor,
        setLocal : localStorageProfessor
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    /*Profesores*/
    function _addProfessor(puserProfessor){
      //users.push(pUser);
      userProfessor.push(puserProfessor);
      console.log(puserProfessor);
      localStorageProfessor(userProfessor);

    }
     /*Profesores*/
    function _getProfessor(){
      var listaStored = localStorage.getItem('localProfessor');
      if (listaStored == null ) {
        userProfessor = [];
      }else {
        userProfessor = JSON.parse(listaStored);
      }
      return userProfessor;
    }

    function _deleteProfessor (pIndex) {
        userProfessor.splice(pIndex, 1);
        localStorage.setItem('localProfessor', JSON.stringify(userProfessor))
      }


    /*Local Storage Profesores*/
    function localStorageProfessor(puserProfessor){
      localStorage.setItem(['localProfessor'], JSON.stringify(puserProfessor));
    }


  }

})();
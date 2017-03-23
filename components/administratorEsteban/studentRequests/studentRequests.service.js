(function(){
  angular
  .module('cshApp')
  .service('studentRequestsService', studentRequestsService);

  studentRequestsService.$inject = ['$http', 'localStorageService'];

  function studentRequestsService($http,localStorageService){
    var studentsList = [
    {
      "state_key":1,
      "state_name":"Postulado",
      "key": 1,
      "role_key":"1",
      "id":"123456789",
      "name":"Esteban",
      "surname":"Fonseca",
      "secondSurname":"Blanco",
      "mail":"efonsecab@ucenfotec.ac.cr",
      "password":"123",
      "birthdate":"20/08/2017",
      "carrers":[1,2,3],
      "courses":[4,5,6],
      "justification":"",
      "resumeUrl":"",//url,
      "gitHubUrl":"",
      "websiteUrl":"",
      "avatarUrl":"http://www.nsqdigitalmedia.com/wp-content/uploads/avatar-11.png"
    },
    {
      "state_key":1,
      "state_name":"Postulado",
      "key": 2,
      "role_key":"1",
      "id":"123456789",
      "name":"Adrián",
      "surname":"Fonseca",
      "secondSurname":"Blanco",
      "mail":"jorgeb@ucenfotec.ac.cr",
      "password":"123",
      "birthdate":"20/08/2017",
      "carrers":[1,2,5],
      "courses":[4,5,7],
      "justification":"",
      "resumeUrl":"",//url,
      "gitHubUrl":"",
      "websiteUrl":"",
      "avatarUrl":"https://www.heartit.co/wp-content/uploads/avatar-7.png"
    }    
    ];
    localStorageStudentsList(studentsList);

    var publicAPI = {
      getRequests : _getStudents,
      changeRequestState : _changeStudentsState
    };
    return publicAPI;

    //trae la lista de estudiantes
    function _getStudents(){
      var storedList = localStorageService.get('localStudentsList');
      if(storedList == null){
        studentsList = [];
      }else{
        studentsList = JSON.parse(storedList);
      }
      return studentsList;
    }

    //cambia el estado a elegible o rechazado según el parámetro
    function _changeStudentsState(request,newState){
      request.state_key=newState;
      var index = null;
      angular.forEach(studentsList, function(student, position) {
        if (student.mail === request.mail) {
          index = position;
        }
      });
      studentsList[index]=request;
      localStorageStudentsList(studentsList);
    }
    //inserta los nuevos registros al localStorage
    function localStorageStudentsList(jlist){
      //localStorageService.set('key', JSON.stringify(value));
      localStorageService.set('localStudentsList', JSON.stringify(jlist));
    }

  }

})();
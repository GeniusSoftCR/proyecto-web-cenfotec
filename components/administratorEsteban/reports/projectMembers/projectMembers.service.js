(function(){
  angular
  .module('cshApp')
  .service('projectMembersService', projectMembersService);

  projectMembersService.$inject = ['$http', 'localStorageService'];

  function projectMembersService($http,localStorageService){
    
    var publicAPI = {
      getProjects : _getProjects,
      getStudents : _getStudents,
      getTeachers : _getTeachers
    };
    return publicAPI;

    //devuelve la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        projectsList = [];
      }else{
        projectsList = storedList;
      }
      return projectsList;
    }
    //devuelve la lista de estudiantes
    function _getStudents(){
      var storedList = localStorageService.get('localStudents');
      if(storedList == null){
        studentsList = [];
      }else{
        studentsList = storedList;
      }
      return studentsList;
    }
    //devuelve la lista de profesores
    function _getTeachers(){
      var storedList = localStorageService.get('localProfessors');
      if(storedList == null){
        teachersList = [];
      }else{
        teachersList = storedList;
      }
      return teachersList;
    }

  }

})();

(function(){
  angular
  .module('cshApp')
  .service('admin_loadProjectsService', admin_loadProjectsService);

  admin_loadProjectsService.$inject = ['$http', 'localStorageService'];

  function admin_loadProjectsService($http,localStorageService){
    //cargar la lista de estados de proyectos
  	var projectsStatesList = [
  		{"id":1,"state":"inRevision","name":"En revision","default":true},
  		{"id":2,"state":"aproved","name":"Aprobado"},
  		{"id":3,"state":"active","name":"Rechazado"},			
  		{"id":4,"state":"inProcess","name":"En proceso"},
  		{"id":5,"state":"ended","name":"Finalizado"}
  	];
  	localStorageProjectsStatesList(projectsStatesList);
    //carla lalista de proyectos
    var projectsList = [
      {"id":1,"state":1,"nombre":"Progestor1"},
      {"id":2,"state":1,"nombre":"Progestor2"},
      {"id":3,"state":2,"nombre":"Progestor3"},
      {"id":4,"state":2,"nombre":"Progestor4"},
      {"id":5,"state":3,"nombre":"Progestor5"},
      {"id":6,"state":3,"nombre":"Progestor6"},
      {"id":7,"state":4,"nombre":"Progestor7"},
      {"id":8,"state":4,"nombre":"Progestor8"},
      {"id":9,"state":5,"nombre":"Progestor9"},
      {"id":10,"state":5,"nombre":"Progestor10"},
      {"id":11,"state":1,"nombre":"Progestor11"}
    ];

    var publicAPI = {
      getProjectsStates : _getProjectStates,
      getProjects : _getProjects
    };
    return publicAPI;

    //trae la lista de estados de proyectos
    function _getProjectStates(){
      var storedList = localStorageService.get('localProjectsStatesList');
      if(storedList == null){
        projectsStatesList = [];
      }else{
        projectsStatesList = JSON.parse(storedList);
      }
      return projectsStatesList;
    }
    //trae la lista de proyectos
    function _getProjects(){
      var storedList = localStorageService.get('localProjectsList');
      if(storedList == null){
        projectsList = [];
      }else{
        projectsList = JSON.parse(storedList);
      }
      return projectsList;
    }

  	//Persistencia de los datos
    function localStorageProjectsStatesList(jlist){
      localStorageService.set('localProjectsStatesList', JSON.stringify(jlist));
    }
    function localStorageProjectsList(jlist){
      localStorageService.set('localProjectsList', JSON.stringify(jlist));
    }
  }

})();

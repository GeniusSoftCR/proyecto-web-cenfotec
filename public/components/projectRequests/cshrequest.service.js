(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular
  .module('cshApp')
  .service('cshReqService', cshReqServiceFn);
    function cshReqServiceFn (localStorageService, $http) {
      
      //Definimos en local los estados de proyecto
      localStorageService.set('localProjectsStatesList', proyectStates);

      var clients = [];
      var projects = [];
      var projectStates = [];
      var latestClientId = 0;
      var latestProjectId = 0;
      var publicApi = {
        addProject : _addProject,
        getProjects : _getProjects,
        deleteProject : _deleteProject,
        putProject : _putProject,
        updateLocal: _updateLocal,
        getclientId : _getClientId,
        getProjectId : _getProjectId,
        getProjectsStates : _getProjectsStates,
        getLocal : _getLocal
      };
      return publicApi;
      function _getProjectsStates () {
        var storedList = localStorageService.get('localProjectsStatesList');
        if(storedList == null){
          projectStates = [];
        }else{
          projectStates = storedList;
        }
        return projects;
      }

      function _getProjects () {
        getLocal();
      }

      function _deleteProject (pProject) {
        console.log('inside Delete Project')
      }

      function _putProject (pProjectId, pUpdateProject) {
        var projects = localStorageService.get('localProjectsList');
        for (var i = 0; i < projects.length; i++){
          if (projects[i].id == pProjectId) {
            projects.splice(i, 1, pUpdateProject);
            break;
          }
        }
        console.log(projects);
        localStorageService.set('localProjectsList', projects);
      }

      function _updateLocal () {

      }

      function _getLocal () {
        var storedList = localStorageService.get('localProjectsList');
        if(storedList == null){
          projects = [];
        }else{
          projects = storedList;
        }
        return projects;
      }
      function _getLocalClients () {
        var storedList = localStorageService.get('localClientList');
        if(storedList == null){
          clients = [];
        }else{
          clients = storedList;
        }
        return clients;
      }

      function _getClientId () {
        var storedList = localStorageService.get('localClientId');
        if(storedList == null){
          latestClientId = 0;
          localStorageService.set('localClientId', latestClientId);
        }else{
          latestClientId = storedList + 1;
          localStorageService.set('localClientId', latestClientId);
        }
        return latestClientId;
      }

      function _getProjectId () {
        var storedList = localStorageService.get('latestProjectId');
        if(storedList == null){
          latestProjectId = 0;
          localStorageService.set('latestProjectId', latestProjectId);
        }else{
          latestProjectId = storedList + 1;
          localStorageService.set('latestProjectId', latestProjectId);
        }
        return latestProjectId;
      }

    }
})();
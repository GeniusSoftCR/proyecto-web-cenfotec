(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('cshReqService', cshReqServiceFn);
    function cshReqServiceFn (localStorageService, $http) {
      var proyectStates = [{
        "id":1,
        "state":"inRevision",
        "name":"En revision",
        "default":true
      }, {
        "id":2,
        "state":"aproved",
        "name":"Aprobado"
      }, {
        "id":3,
        "state":"active",
        "name":"Rechazado"
      }, {
        "id":4,
        "state":"inProcess",
        "name":"En proceso"
      },{
        "id":5,
        "state":"ended",
        "name":"Finalizado"
      }];
      //Definimos en local los estados de proyecto
      localStorageService.set('localProjectsStatesList', proyectStates);

      var clients = [
        {
          "id" : 0,
          "nombre":"Cenfotec",
          "cedula":"3-101-293932",
          "sector":"desarrollo",  
          "responsable":{
            "name":"Pablo Monestel",
            "mail":"pmonestel@ucenfotec.ac.cr"
          }
        }
      ]

      var projects = [
        {
          "name": "Creación de app normal",
          "id":0,
          "state_key":1,
          "clientId":0,
          "professor": null,
          "assitant": null,
          "executiveSummary":"",
          "objective":"",
          "images":[
            {
              "url":""
            }
          ],
          "founding": 0,
          "students":[],//students id's
          
        }
      ];
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
        getLocal : _getLocal
      };
      return publicApi;

      function _addProject (pProject, pClient) {
        var localListProjects = localStorageService.get('localProjectsList');
        if(localListProjects == null){
        }else{
          projects = localListProjects;
        }
        var localListClients = localStorageService.get('clients');
        if(localListClients == null){
        }else{
          clients = localListClients;
        }
        projects.push(pProject);
        clients.push(pClient);
        localStorageService.set('localClientList', clients);
        localStorageService.set('localProjectsList', projects);
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
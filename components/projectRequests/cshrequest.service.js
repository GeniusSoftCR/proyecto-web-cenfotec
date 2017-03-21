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
        "satate":"aproved",
        "name":"Aprobado"
      }, {
        "id":3,
        "satate":"active",
        "name":"Rechazado"
      }, {
        "id":4,
        "satate":"inProcess",
        "name":"En proceso"
      },{
        "id":5,
        "satate":"ended",
        "name":"Finalizado"
      }];

      var clients = [
        {
          "idClient" : 1,
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
          "id":1,
          "state":1,
          "client":1,
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
        console.log(pProject);
        projects.push(pProject);
        clients.push(pClient);
        localStorageService.set('localClientList', pClient);
        localStorageService.set('localProjectsList', projects);
      }

      function _getProjects () {
        getLocal();
      }

      function _deleteProject (pProject) {
        console.log('inside Delete Project')
      }

      function _putProject (pProject) {
        console.log('inside Put Project')
      }

      function _updateLocal () {

      }

      function _getLocal () {
        var storedList = localStorageService.get('localProjectsList');
        if(storedList == null){
          projects = [];
        }else{
          projects = JSON.parse(storedList);
        }
        return projects;
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
(function(){
  /* Servicio de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('watchProjectService', watchProjectService);
    function watchProjectService (localStorageService, $http) {
      var publicApi = {
        getProjectbyId : _getProjectbyId,
        getClientbyId : _getClientbyId,
        getStatusId : _getStatusId
      }

      return publicApi;
      //Obtener projecto desde ID
      function _getProjectbyId (projectId) {
        var storedList = localStorageService.get('localProjectsList');
        if(storedList == null){
          var project = [];
        } else {
          for(var i = 0; i < storedList.length; i++) {
            if (storedList[i].id == projectId) {
              project = storedList[i];
              break;
            } else {
              project = [];
            }
          }
        }
        return project;
      }
      //obtener cliente desde ID
      function _getClientbyId (clientId) {
        var storedList = localStorageService.get('localClientList');
        if(storedList == null){
          var client = [];
        } else {
          for(var i = 0; i < storedList.length; i++) {
            if (storedList[i].id == clientId) {
              client = storedList[i];
              break;
            } else {
              client = [];
            }
          }
        }
        return client;
      }
      //Obtener estado desde ID
      //obtener cliente desde ID
      function _getStatusId (statusId) {
        var storedList = localStorageService.get('localProjectsStatesList');
        if(storedList == null){
          var status = [];
        } else {
          for(var i = 0; i < storedList.length; i++) {
            if (storedList[i].id == statusId) {
              status = storedList[i];
              break;
            } else {
              status = [];
            }
          }
        }
        return status;
      }
    }
})();
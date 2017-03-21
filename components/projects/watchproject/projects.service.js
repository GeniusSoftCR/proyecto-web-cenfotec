(function(){
  /* Servicio de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('watchProjectService', watchProjectService);
    function watchProjectService (localStorageService, $http) {
      var publicApi = {
        getProjectbyId : _getProjectbyId
      }

      return publicApi;

      function _getProjectbyId (projectId) {
        var storedList = localStorageService.get('localProjectsList');
        if(storedList == null){
          var project = [];
        } else {
          storedList = JSON.parse(storedList);
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
    }
})();
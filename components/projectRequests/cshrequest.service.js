(function(){
  /* Servicio de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('cshReqService', cshReqServiceFn);

    function cshReqServiceFn () {
      var projects = [];
      var publicApi = {
        addProject : _addProject,
        getProjects : _getProjects,
        deleteProject : _deleteProject,
        putProject : _putProject
      };
      return publicApi;

      function _addProject (pProject) {
        console.log('inside Add Project')
      }

      function _getProjects () {
        console.log('inside Get Projects')
      }

      function _deleteProject (pProject) {
        console.log('inside Delete Project')
      }

      function _putProject (pProject) {
        console.log('inside Put Project')
      }

    }
})();
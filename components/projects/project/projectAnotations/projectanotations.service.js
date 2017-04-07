(function(){
  /* Servicio de Anotaciones de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp').service('projectAnotationsService', projectAnotations);
    function projectAnotations () {
      var anotations = [
        {
          id : 1,
          projectId : 1,
          name : 'La primera anotación',
          description : 'Esta es la descripción general de la anotación que estamos realizando, algo muy interesante',
          iduserCreate: 1
        }
      ];
      var publicApi = {
        addAnotation : _addAnotation,
        getAnotations : _getAnotations,
        deleteAnotation : _deleteAnotation,
        putAnotation : _putAnotation
      };
      return publicApi;

      function _addAnotation (pAnotation) {
        anotations.push(pAnotation);
      }

      function _getAnotations () {
        return anotations;
      }

      function _deleteAnotation (pAnotation) {
        anotations.splice(pAnotation, 1);
      }

      function _putAnotation (pAnotation, pFinalAnotation) {
        _deleteAnotation(pAnotation);
        _addAnotation(pFinalAnotation);
      }

    }
})();
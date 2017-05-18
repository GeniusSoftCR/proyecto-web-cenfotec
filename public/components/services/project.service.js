(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('projectService', projectService);

	projectService.$inject = ['$log','$http','HOST_CONFIG'];
	/*Servicio para profesores y asistentes*/
	function projectService($log,$http,HOST_CONFIG){
		var host = HOST_CONFIG.address;

		var publicApi = {
			addProject: _addProject,
			getProjects: _getProjects,
			getProjectsByTeacher: _getProjectsByTeacher,
			updateProject: _updateProject,
        	changeRequestState : _changeProjectsState,
        	getAnotation : _getAnotation,
        	getFilteredProjects: _getFilteredProjects
		};
		return publicApi;
		//guarda las solicitudes de proyectos
		function _addProject(newProject){
			return $http.post('http://'+host+':3000/api/projects/add', newProject);
		}
	    function _getProjects(filter){
	      	return $http.put('http://'+host+':3000/api/projects/load',filter);
	    }
	    function _getProjectsByTeacher(filter){
	      return $http.put('http://'+host+':3000/api/projects/byTeacher',filter);
	    }
	    //actualiza el estado de los proyectos
	    //cambia el estado a aprobado o rechazado según el parámetro
	    function _changeProjectsState(request,newState){
	      request.state=newState;
	      return $http.put('http://'+host+':3000/api/projects/update',request);      
	    }
	    //posiblemente fusione el _changeProjectsState con el _updateProject
	    function _updateProject(request){
	      return $http.put('http://'+host+':3000/api/projects/update',request);      
	    }

	  /* function _getAnotations(filter){
	      return $http.get('http://'+host+':3000/api/projects/add/anotation',filter);
	    }*/
	    function _getFilteredProjects(filter){
	      	return $http.put('http://'+host+':3000/api/projects/filtered',filter);
	    }
		function _getAnotation(filter){
	      	return $http.put('http://'+host+':3000/api/projects/load',filter);
	    }
/*
	    function _getAnotations(filter){
	      return $http.post('http://'+host+':3000/api/projects/anotations');
	    }

*/	}
})();
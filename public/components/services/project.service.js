(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('projectService', projectService);

	projectService.$inject = ['$log','$http'];
	/*Servicio para profesores y asistentes*/
	function projectService($log,$http){

		var publicApi = {
			addProject: _addProject,
			getProjects: _getProjects,
        	changeRequestState : _changeProjectsState
		}
		return publicApi;
		//guarda las solicitudes de proyectos
		function _addProject(newProject){
			return $http.post('http://localhost:3000/api/projects/add', newProject);
		}
		//trae la lista de proyectos
	    function _getProjects(){
	      return $http.get('http://localhost:3000/api/projects/load');
	    }
	    //actualiza el estado de los proyectos
	    //cambia el estado a aprobado o rechazado según el parámetro
	    function _changeProjectsState(request,newState){
	      request.state=newState;
	      return $http.put('http://localhost:3000/api/user/students/update',request);      
	    }
	}
})()
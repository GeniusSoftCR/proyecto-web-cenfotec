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
			getProjects: _getProjects
		}
		return publicApi;
		//agrega un nuevo proyecto
		function _addProject(newProject){
			return $http.post('http://localhost:3000/api/projects/add', newProject);
		}
		//trae la lista de proyectos
	    function _getProjects(){
	      return $http.get('http://localhost:3000/api/projects/load');
	    }
	}
})()
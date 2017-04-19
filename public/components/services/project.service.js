(function(){
	'use strict'
	angular
	.module('cshApp')
	.service('projectService', projectService);

	projectService.$inject = ['$log','$http','localStorageService'];
	/*Servicio para profesores y asistentes*/
	function projectService($log,$http,localStorageService){

		var publicApi = {
			addProject: _addProject,
			getProject: _getProject,
			getProjects: _getProjects,
			deleteProjects: _deleteProjects,
			updateProject: _updateProject
		}
		return publicApi;

		function _addProject(newProject){
			return $http.post('http://localhost:3000/api/project/add', newProject);
		}
	}
})()
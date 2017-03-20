// Code by @hmurillop
(function () {
	'use strict';
	angular
	.module('LocalDataBase',['LocalStorageModule'])
	.factory('DataService', DataService)

	DataService.$inject = ['$log','$http','localStorageService'];


	function DataService($log,$http,localStorageService) {
		// Private code
		var users = null;
		var updateUsers = function () {
			users = localStorageService.get("users");
		}
		//  PUBLIC API 

		var api = {
		    getUsers: _getUsers
		};
		return api;
		// END PUBLIC API

		// API private code


		_getUsers = function () {
			updateUsers();
			return users
		}

	}

})()
// Code by @hmurillop
(function () {
	'use strict';
	angular
	.module('LocalDataBase',['LocalStorageModule'])
	.factory('DataService', DataService)

	DataService.$inject = ['$http','localStorageService'];


	function DataService($http,localStorageService) {
		//  PUBLIC API
		var api = {
		    getUsers: _getUsers,
		    getUser: _getUser
		};
		return api;
		// END PUBLIC API

		// Private code
		var users = [
			{
				"key":1,
				"name":"Yisus"
			},
			{
				"key":2,
				"name":"Judas"
			}
		];
		
		// API private code
		_getUsers = function () {
			return users
		}
		_getUsers = function (userKey) {
			angular.forEach(users, function(value, key) {
			  if (value.key == userKey) {
			  	return value
			  } else {
			  	return "No results"
			  }
			});	
		}


	}

})()
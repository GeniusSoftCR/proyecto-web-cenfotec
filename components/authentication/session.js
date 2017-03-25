(function () {
	'use strict';
	angular.module('cshApp')
	.service('SessionService', SessionService)

	function SessionService(){
	 
		  this.create = function (userId, userRole) {//sessionId
		  	//this.id = sessionId;
		    this.userId = userId;
		    this.userRole = userRole;
		  };
		  this.destroy = function () {
		    this.userId = null;
		    this.userRole = null;
		  };    
	};
})();

(function () {
	'use strict';
	angular.module('cshApp')
	.service('SessionService', SessionService)

	function SessionService(){
	 
		  this.create = function (userEmail, userRole) {//sessionId
		  	//this.id = sessionId;
		    this.userEmail = userEmail;
		    this.userRole = userRole;
		  };
		  this.destroy = function () {
		    this.userEmail = null;
		    this.userRole = null;
		  };    
	};
})();
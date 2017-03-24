(function () {
	'use strict';
	
	angular.module('cshApp')
	  .service('SessionService', function () {
	    // AngularJS will instantiate a singleton by calling "new" on this function
		  this.create = function (userId, userRole) {//sessionId
		  	//this.id = sessionId;
		    this.userId = userId;
		    this.userRole = userRole;
		  };
		  this.destroy = function () {
		    // this.id = null;
		    this.userId = null;
		    this.userRole = null;
		  };    

	});
})();

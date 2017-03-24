(function(){
  angular
    .module('cshApp')
    .controller('clientsController', clientsController);
    clientsController.$inject= ['clientsService'];

    function clientsController(clientsService){
      
		var clientsCtrl = this;
		//trae la lista de proyectos
		clientsCtrl.projects = clientsService.getProjects();
		clientsCtrl.clientContainer = false;
		clientsCtrl.client = {};
		
		//contendrá la lista de clientes
		/*clientsCtrl.clients = [];
		//concatena los clientes de cada proyecto en una colección para ser consumida en la vista
		for(i = 0; i < clientsCtrl.projects.length; i++){
		    //lo agrega a la lista de miembros
		    clientsCtrl.clients.push(projectMembCtrl.teachers[i]);
		}*/
      	
      	clientsCtrl.showInfo= function(project){
	        //oculta la sección de información del cliente
	        clientsCtrl.clientContainer = true;
	        console.log(project.clientId);
	   	}

    }

})();

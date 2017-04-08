(function(){
  angular
    .module('cshApp')
    .controller('clientsController', clientsController);
    clientsController.$inject= ['clientsService'];

    function clientsController(clientsService){
      
		var clientsCtrl = this;
		//trae la lista de proyectos
		clientsCtrl.projects = clientsService.getProjects();
		//trae la lista de clientes
		clientsCtrl.clients = clientsService.getClients();
		clientsCtrl.clientContainer = false;
		clientsCtrl.client = {};
      	
      	clientsCtrl.showInfo= function(project){
	        //oculta la sección de información del cliente
	        clientsCtrl.clientContainer = true;
	        //almacena el proyecto que viene por parámetro
	        clientsCtrl.project=project;
	        //recorre todos los clientes
        	for(j = 0; j < clientsCtrl.clients.length; j++){
        		//verifica cuando el id de proyecto coincide con el id de cliente
        		if(clientsCtrl.project.id==clientsCtrl.clients[j].id){
        			clientsCtrl.client = clientsCtrl.clients[j];
        		}
        	}
	        
	   	}
	   	
    }

})();

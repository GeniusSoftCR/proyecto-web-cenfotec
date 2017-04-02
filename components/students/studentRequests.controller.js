(function(){
  angular
    .module('cshApp')
    .controller('studentRequestsController', studentRequestsController);
      studentRequestsController.$inject= ['studentRequestsService'];

    function studentRequestsController(studentRequestsService){
     
      var vm = this;
      //inicia cargando la lista de solicitudes
      vm.requestsList = studentRequestsService.getRequests();
      vm.btnYes=true;
      vm.btnNo=true;
      //oculta secciones del view
      vm.rejection=false;//contiene la justificación
      vm.confirm=false;//botón para confirmar el rechazo

      //recargar la lista de solicitudes
      vm.fetchRequestsList= function(){
        vm.requestsList = studentRequestsService.getRequests();
      }

      //mostrar detalle
      vm.viewRequest= function(request){
        vm.req=request;
        // setTimeout(function(){$('#myModal').modal('hide')},3000);
      }
      //ocultar confirmación
      vm.hideConfirm= function(request){
        vm.rejection=false;
        vm.confirm=false;
        vm.btnYes=true;
        vm.btnNo=true;
      }
      vm.approveRequest= function(request){
        //1)1er param:solicitud actual, 2do param: estado(rechazado=2)
        studentRequestsService.changeRequestState(request,2);
        //3)actualizar la lista de solicitudes
        vm.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
      }
      vm.rejectRequest= function(request){
        if(vm.req.justification!=""){
        vm.validation=false;
        //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
        studentRequestsService.changeRequestState(request,3);
        //2)oculta la sección de la justificación
        vm.rejection=false;
        vm.confirm=false;
        //3)actualizar la lista de solicitudes
        vm.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
        }else{vm.validation=true;}
      }

    }

})();
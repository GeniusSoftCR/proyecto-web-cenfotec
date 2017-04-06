(function(){
  angular
    .module('cshApp')
    .controller('studentRequestsController', studentRequestsController);
      studentRequestsController.$inject= ['studentRequestsService'];

    function studentRequestsController(studentRequestsService){
     
      var vm = this;
      //carga la lista de solicitudes
      vm.requestsList = studentRequestsService.getRequests();
      //en el modal:
      vm.btnYes=true;     //muestra botón de aprobar
      vm.btnNo=true;      //muestra botón de rechazar
      vm.rejection=false; //oculta bloque de la jsutificación
      vm.confirm=false;   //oculta botón de confirmar

      //recargar la lista de solicitudes
      vm.fetchRequestsList= function(){
        vm.requestsList = studentRequestsService.getRequests();
      }

      //mostrar el detalle de la solicitud
      vm.viewRequest= function(request){
        vm.req=request;     //binding de la solicitud seleccionada
        //en el modal:
        vm.btnYes=true;     //muestra botón de aprobar
        vm.btnNo=true;      //muestra botón de rechazar
        vm.rejection=false; //oculta bloque de la jsutificación
        vm.confirm=false;   //oculta botón de confirmar
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
        //cerrar el modal
        $('#studentReq-Modal').modal('hide');
        /*4)Back End:enviar notificación por correo*/
      }
      vm.rejectRequest= function(request){
        if(vm.req.justification!=null){
          vm.validate=false;
          //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
          studentRequestsService.changeRequestState(request,3);
          //2)oculta la sección de la justificación
          vm.rejection=false;
          vm.confirm=false;
          //3)actualizar la lista de solicitudes
          vm.fetchRequestsList();
          //cerrar el modal
          $('#studentReq-Modal').modal('hide');
          vm.rejection=false;
          vm.confirm=false;
          vm.btnYes=true;
          vm.btnNo=true;
          /*4)Back End:enviar notificación por correo*/
        } else { 
          vm.validate=true;
          $('#justification').closest('.form-group').addClass('has-error');
          vm.req.justification=null;
        }
      }

    }

})();
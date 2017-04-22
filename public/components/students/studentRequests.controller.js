(function(){
  angular
    .module('cshApp')
    .controller('studentRequestsController', studentRequestsController);
      studentRequestsController.$inject= ['userService'];

    function studentRequestsController(userService){
     
      var vm = this;
      //carga la lista de solicitudes
      vm.requestsList = [];

      //en el modal:
      vm.btnYes=true;     //muestra botón de aprobar
      vm.btnNo=true;      //muestra botón de rechazar
      vm.rejection=false; //oculta bloque de la jsutificación
      vm.confirm=false;   //oculta botón de confirmar

      //Recargar la lista de solicitudes
      vm.fetchRequestsList= function(){
        userService.getRequests().then(function(res){
          vm.requestsList = res.data;
          console.log(vm.requestsList);
          //output.vale='Su solicitud ha sido enviada correctamente';
        })
      }
      vm.fetchRequestsList();

      //Mostrar el detalle de la solicitud
      vm.viewRequest= function(request){
        vm.req=request;     //binding de la solicitud seleccionada
        //en el modal:
        vm.btnYes=true;     //muestra botón de aprobar
        vm.btnNo=true;      //muestra botón de rechazar
        vm.rejection=false; //oculta bloque de la jsutificación
        vm.confirm=false;   //oculta botón de confirmar
        $('#justification').closest('.form-group').removeClass('has-error');
        vm.req.justification=null;
        // setTimeout(function(){$('#myModal').modal('hide')},3000);
      }

      //Aprobar una solicitud
      vm.approveRequest= function(request){
        //1)1er param:solicitud actual, 2do param: estado(aprobado=2)
        userService.changeRequestState(request,"elegible").then(function(res){
          console.log("Estudiante aprobado" + res.data);
        });
        //3)actualizar la lista de solicitudes
        vm.fetchRequestsList();
        //cerrar el modal
        $('#studentReq-Modal').modal('hide');
        /*4)Back End:enviar notificación por correo*/
      }

      //Rechazar una solicitud
      vm.rejectRequest= function(request){
        //si el input de la justificación no está vacío
        if(vm.req.justification!=null){
          vm.validate=false;  //oculta mensaje "justificación requerida"
          $('#justification').closest('.form-group').removeClass('has-error');
          //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
          userService.changeRequestState(request,"rejected");
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
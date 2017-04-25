(function(){
  angular
    .module('cshApp')
    .controller('projectRequestsController', projectRequestsController);
      projectRequestsController.$inject= ['projectService','$window'];

    function projectRequestsController(projectService,$window){
     
      var vm = this;
      //carga la lista de solicitudes
      vm.requestsList = [];

      //en el modal:
      vm.btnYes=true;     //muestra botón de aprobar
      vm.btnNo=true;      //muestra botón de rechazar
      vm.rejection=false; //oculta bloque de la jsutificación
      vm.confirm=false;   //oculta botón de confirmar

      //RECARGAR LISTA DE SOLICITUDES
      vm.reloadPage = function () {
        setTimeout(function(){$window.location.reload()},500)
      }
      vm.fetchRequestsList= function(){
        projectService.getProjects().then(function(res){
          vm.requestsList = res.data;
        })
        vm.validate=false;
      }
      vm.fetchRequestsList();

      //MOSTRAR DETALLE DE LA SOLICITUD
      vm.viewRequest= function(request){
        vm.req=request;     //binding de la solicitud seleccionada
        //en el modal:
        vm.btnYes=true;     //muestra botón de aprobar
        vm.btnNo=true;      //muestra botón de rechazar
        vm.rejection=false; //oculta bloque de la justificación
        vm.confirm=false;   //oculta botón de confirmar
        vm.stuApro=false;
        vm.stuReje=false;
        $('#justification').closest('.form-group').removeClass('has-error');
        vm.req.justification=null;
        vm.finalStep=false;
      }

      //APROBAR SOLICITUD
      vm.approveRequest= function(request){
        //1)1er param:solicitud actual, 2do param: estado(aprobado=2)
        projectService.changeRequestState(request,"aproved").then(function(res){
          console.log("Proyecto aprobado" + res.data);
        });
        vm.stuApro=true;
        setTimeout(function(){
          $('#studentReq-Modal').modal('hide');
          //3)actualizar la lista de solicitudes
          vm.fetchRequestsList();
          vm.reloadPage();
        },1500);
      }

      //Rechazar una solicitud
      vm.rejectRequest= function(request){
        //si el input de la justificación no está vacío
        if(vm.req.justification!=null){
          vm.validate=false;  //oculta mensaje "justificación requerida"
          $('#justification').closest('.form-group').removeClass('has-error');
          //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
          projectService.changeRequestState(request,3);
          //2)oculta la sección de la justificación
          vm.rejection=false;
          vm.confirm=false;
          //3)actualizar la lista de solicitudes
          vm.fetchRequestsList();
          //cerrar el modal
          $('#studentReq-Modal').modal('hide');
          //
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
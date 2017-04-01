(function(){
  angular
    .module('cshApp')
    .controller('studentRequestsController', studentRequestsController);
      studentRequestsController.$inject= ['studentRequestsService'];

    function studentRequestsController(studentRequestsService){
     
      var vm = this;
      //inicia cargando la lista de solicitudes
      vm.requestsList = studentRequestsService.getRequests();
      //oculta secciones del view
      vm.rejection=false;
      vm.modal=false;

      //recargar la lista de solicitudes
      vm.fetchRequestsList= function(){
        vm.requestsList = studentRequestsService.getRequests();
      }

      //mostrar detalle
      vm.viewRequest= function(request){
        vm.modal=true;
        vm.req=request;
      }
      vm.approveRequest= function(request){
        //1)1er param:solicitud actual, 2do param: estado(rechazado=2)
        studentRequestsService.changeRequestState(request,2);
        //2)oculta el modal
        vm.modal=false;
        //3)actualizar la lista de solicitudes
        vm.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
      }
      vm.rejectRequest= function(request){
        if(vm.req.justification!=""){
        vm.validation=false;
        //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
        studentRequestsService.changeRequestState(request,3);
        //2)oculta el modal y la sección de la justificación
        vm.modal=false;
        vm.rejection=false;
        //3)actualizar la lista de solicitudes
        vm.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
        }else{vm.validation=true;}
      }
      vm.closeModal = function (_param) {
        vm.modal = false;
      }

    }

})();
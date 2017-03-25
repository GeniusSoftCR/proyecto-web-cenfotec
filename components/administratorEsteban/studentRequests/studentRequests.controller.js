(function(){
  angular
    .module('cshApp')
    .controller('studentRequestsController', studentRequestsController);
      studentRequestsController.$inject= ['studentRequestsService'];

    function studentRequestsController(studentRequestsService){
     
      var studentReqCtrl = this;
      //inicia cargando la lista de solicitudes
      studentReqCtrl.requestsList = studentRequestsService.getRequests();
      //oculta secciones del view
      studentReqCtrl.rejection=false;
      studentReqCtrl.modal=false;

      //recargar la lista de solicitudes
      studentReqCtrl.fetchRequestsList= function(){
        studentReqCtrl.requestsList = studentRequestsService.getRequests();
      }

      //mostrar detalle
      studentReqCtrl.viewRequest= function(request){
        studentReqCtrl.modal=true;
        studentReqCtrl.req=request;
      }
      studentReqCtrl.approveRequest= function(request){
        //1)1er param:solicitud actual, 2do param: estado(rechazado=2)
        studentRequestsService.changeRequestState(request,2);
        //2)oculta el modal
        studentReqCtrl.modal=false;
        //3)actualizar la lista de solicitudes
        studentReqCtrl.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
      }
      studentReqCtrl.rejectRequest= function(request){
        if(studentReqCtrl.req.justification!=""){
        studentReqCtrl.validation=false;
        //1)1er param:solicitud actual, 2do param: estado(rechazado=3)
        studentRequestsService.changeRequestState(request,3);
        //2)oculta el modal y la sección de la justificación
        studentReqCtrl.modal=false;
        studentReqCtrl.rejection=false;
        //3)actualizar la lista de solicitudes
        studentReqCtrl.fetchRequestsList();
        /*4)Back End:enviar notificación por correo*/
        }else{studentReqCtrl.validation=true;}
      }
      studentReqCtrl.closeModal = function (_param) {
        assignStudentsCtrl.modal = false;
      }

    }

})();
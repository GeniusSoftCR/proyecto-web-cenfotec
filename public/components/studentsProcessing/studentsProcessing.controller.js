(function(){
  angular
    .module('cshApp')
    .controller('studentProcessingController',studentProcessingController);
      studentProcessingController.$inject= ['userService','$window'];

    function studentProcessingController(userService,$window){
     
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
        userService.getRequests().then(function(res){
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
        vm.rejection=false; //oculta bloque de la jsutificación
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
        userService.changeRequestState(request,"eligible").then(function(res){
          console.log("Estudiante aprobado" + res.data);
        });
        vm.stuApro=true;
        setTimeout(function(){
          $('#studentReq-Modal').modal('hide');
          //3)actualizar la lista de solicitudes
          vm.fetchRequestsList();
          vm.reloadPage();
        },1500);
      }

      vm.switch=function(){
        $('#studentReq-Modal').modal('hide');
        $('#retro-Modal').modal('show');
      }

      vm.confirmation=function(x,y){
        userService.changeRequestState(x,y);
        vm.stuReje=true;
        setTimeout(function(){
          $('#studentReq-Modal').modal('hide');
          //3)actualizar la lista de solicitudes
          vm.fetchRequestsList();
          vm.reloadPage();
        },1500);
      }

      //RECHAZAR SOLICITUD
      vm.rejectRequest= function(request){
        vm.finalStep=false;
        //si la justificación no está vacía
        if(vm.req.justification!=null){
          //vm.validate=false;  //oculta mensaje "justificación requerida"
          $('#justification').closest('.form-group').removeClass('has-error');
          //1)seteo de parámetros. 1er param:solicitud actual, 2do param: estado(rechazado=3)
          vm.param1=request;
          vm.param2="rejected";
          //2)mantenimientos
          vm.rejection=false;
          vm.confirm=false;
          vm.btnYes=true;
          vm.btnNo=true;
          vm.finalStep=true;
        } else { 
          //vm.validate=true;
          $('#justification').closest('.form-group').addClass('has-error');
          vm.req.justification=null;
        }
      }
    }

})();
(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['projectService','SessionService'];

    function viewProjectsController(projectService,SessionService){
      var vm = this;
      console.log(SessionService.session.role);
      // if(SessionService.session.role=="student"){
      //   vm.test=true;
      // }
      switch(SessionService.session.role){
        case "admin":
        case "assistant":
          vm.test=true;
          break;
        default:
          vm.test=false;
          projectService.getProjects(vm.prof).then(function(res){
            vm.projects =  res.data;
          })
          break;  
      };
      //inicia cargando la lista de estados de proyecto
      // projectService.getProjects().then(function(res){
      //   vm.projects =  res.data;
      // })

      /*ADMINISTRA SECCIONES A DESPLEGAR*/
      //mensaje de "no hay proyectos"
      vm.message=false;
      console.log("entró");

    }

})();

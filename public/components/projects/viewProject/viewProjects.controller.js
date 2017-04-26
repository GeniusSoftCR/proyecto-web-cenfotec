(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['projectService'];

    function viewProjectsController(projectService){
      
      var vm = this;
      //inicia cargando la lista de estados de proyecto
      projectService.getProjects().then(function(res){
        vm.projects =  res.data;
      })

      /*ADMINISTRA SECCIONES A DESPLEGAR*/
      //mensaje de "no hay proyectos"
      vm.message=false;
      console.log("entró");

    }

})();

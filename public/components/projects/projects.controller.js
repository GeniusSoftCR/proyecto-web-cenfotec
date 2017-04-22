(function(){
  angular
    .module('cshApp')
    .controller('loadProjectsController', loadProjectsController);
    loadProjectsController.$inject= ['projectService'];

    function loadProjectsController(projectService){
      
      var vm = this;
      //inicia cargando la lista de estados de proyecto
      projectService.getProjects().then(function(res){
        vm.projects =  res.data;
      })

      /*ADMINISTRA SECCIONES A DESPLEGAR*/
      //seccion donde se muestra la lista de proyectos (filtrados)
      vm.listingProjects=true;
      //mensaje de "no hay proyectos"
      vm.message=false;
      //bloque de un proyecto específico
      vm.projectView=false;

    }

})();

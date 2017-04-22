(function(){
  angular
    .module('cshApp')
    .controller('loadProjectsController', loadProjectsController);
    loadProjectsController.$inject= ['projectService'];//, 'cshReqService'

    function loadProjectsController(projectService){
      
      var vm = this;
      //inicia cargando la lista de estados de proyecto
      // vm.statesList = projectService.getProjectsStates();
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


      /*ACCESO A UN PROYECTO*/
      vm.accessProject= function(project){
        //oculta la sección de listar los proyectos
        vm.listingProjects=false;
        //"entra" a la sección de un proyecto específico
        vm.projectView=true;
      }

    }

})();

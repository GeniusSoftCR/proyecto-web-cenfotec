(function(){
  angular
    .module('cshApp')
    .controller('loadProjectsController', loadProjectsController);
    loadProjectsController.$inject= ['asis_loadProjectsService'];

    function loadProjectsController(asis_loadProjectsService){
      
      var projectsCtrl = this;
      //inicia cargando la lista de estados de proyecto
      projectsCtrl.statesList = asis_loadProjectsService.getProjectsStates();
      projectsCtrl.projects = asis_loadProjectsService.getProjects();

      /*ADMINISTRA SECCIONES A DESPLEGAR*/
      //seccion donde se muestra la lista de proyectos (filtrados)
      projectsCtrl.listingProjects=true;
      //mensaje de "no hay proyectos"
      projectsCtrl.message=false;
      //bloque de un proyecto específico
      projectsCtrl.projectView=false;


      /*ACCESO A UN PROYECTO*/
      projectsCtrl.accessProject= function(project){
        //oculta la sección de listar los proyectos
        projectsCtrl.listingProjects=false;
        //"entra" a la sección de un proyecto específico
        projectsCtrl.projectView=true;
      }

    }

})();

(function(){
  angular
    .module('cshApp')
    .controller('loadProjectsController', loadProjectsController);
    loadProjectsController.$inject= ['teacher_loadProjectsService'];

    function loadProjectsController(teacher_loadProjectsService){
      
      var projectsCtrl = this;
      /*carga el profesor actual: no seberia quemarlo en el service, DEBE VENIR DE LA SESIÖN*/
      projectsCtrl.teacher = teacher_loadProjectsService.getTeacher();
      //filtro de proyectos
      projectsCtrl.asignedProjects = [];

      //busca los proyectos en los que ha sido asignado el profesor
      projectsCtrl.filterProjects= function(){
        projectsCtrl.projects = teacher_loadProjectsService.getProjects();
        //buscar los proyectos a los que el profesor actual ha sido asignado
        for (i = 0; i < projectsCtrl.projects.length; i++) { 
          if((projectsCtrl.projects[i].professor === projectsCtrl.teacher.id)||(projectsCtrl.projects[i].assistant === projectsCtrl.teacher.id)){
            //filtra por proyectos "en proceso" y/o "finalizados"
            if((projectsCtrl.projects[i].state === 4)||(projectsCtrl.projects[i].state === 5)){

            projectsCtrl.asignedProjects.push(projectsCtrl.projects[i]);
            }
          }
        }
      }
      projectsCtrl.filterProjects();

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

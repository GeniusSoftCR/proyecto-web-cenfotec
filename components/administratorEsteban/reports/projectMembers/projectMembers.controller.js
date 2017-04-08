/*POSIBLEMENTE DEBA CAMBIAR IDS POR MAILS EN LAS BÚSQUEDAS*/
(function(){
  angular
    .module('cshApp')
    .controller('projectMembersController', projectMembersController);
    projectMembersController.$inject= ['projectMembersService'];

    function projectMembersController(projectMembersService){
      
      var projectMembCtrl = this;
      //trae la lista de proyectos
      projectMembCtrl.projects = projectMembersService.getProjects();
      //trae la lista de estudiantes
      projectMembCtrl.students = projectMembersService.getStudents();
      //trae la lista de profesores
      projectMembCtrl.teachers = projectMembersService.getTeachers();
      //lista vacía
      projectMembCtrl.members = [];
      //sección para mostrar participantes de un proyecto
      projectMembCtrl.membersContainer = false;
      //mensaje para cuando la lista de participantes está vacía
      projectMembCtrl.message = false;
      console.log("Fuera" +  projectMembCtrl.members);

      //función para crear la lista de miembros de un projecto específico
      projectMembCtrl.createMembersList= function(project){
        console.log(project);
        //oculta secciones que quedaron abiertas
        projectMembCtrl.membersContainer = false;
        projectMembCtrl.message = false;
        //limpia la lista de miembros
        projectMembCtrl.members = [];

        //busca el profe encargado en la lista de profes
        for(i = 0; i < projectMembCtrl.teachers.length; i++){
          if(projectMembCtrl.teachers[i].id===project.professor){
            //lo agrega a la lista de miembros
            projectMembCtrl.members.push(projectMembCtrl.teachers[i]);
          }
        }
        //busca el profe asistente en la lista de profes
        for(i = 0; i < projectMembCtrl.teachers.length; i++){
          if(projectMembCtrl.teachers[i].id==project.assitant){
            //lo agrega a la lista de miembros
            projectMembCtrl.members.push(projectMembCtrl.teachers[i]);
          }
        }
        //busca los estudiantes asociados
        for(i = 0; i < project.students.length; i++){
          console.log(project.students);
          console.log(projectMembCtrl.students);
          for(j = 0; j < projectMembCtrl.students.length; j++){
            if(project.students[i]==projectMembCtrl.students[j].id){
              //agrega cada estudiante asociado
              projectMembCtrl.members.push(projectMembCtrl.students[j]);
              console.log(projectMembCtrl.members);
            }
          }
        }
        console.log("Dentro" +  projectMembCtrl.members);
        //si la lista de miembros no está vacía la muestra
        if(projectMembCtrl.members!=null){
          projectMembCtrl.membersContainer = true;
        }else{
          projectMembCtrl.message = true;
        }
      }
      
      /*ACCESO A UN PROYECTO*/
      projectMembCtrl.accessProject= function(project){
        //oculta la sección de listar los proyectos
        projectMembCtrl.listingProjects=false;
        //"entra" a la sección de un proyecto específico
        projectMembCtrl.projectView=true;
      }

    }

})();

(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['projectService','SessionService'];

    function viewProjectsController(projectService,SessionService){
      var vm = this;
      vm.flag=false;  //bandera de veirificacion
      vm.empty=false; //mensaje de lista vacía
      vm.asignedProjects = [];  //filtro de proyectos

      //TRAE LA LSITA DE PROYECTOS
      projectService.getProjects({}).then(function(res){
        vm.projects =  res.data;
      });
      //FILTRA el select del view y FILTRA la lista de proyectos
      switch(SessionService.session.role){
        case "admin":
        case "assistant":
          vm.test=true;
          break;
        case "professor":
          vm.teacher=SessionService.session.idNum;
          //buscar los proyectos a los que el profesor actual ha sido asignado
          for (i = 0; i < vm.projects.length; i++) {
            if((vm.projects[i].professor === vm.teacher)||(vm.projects[i].assistant === vm.teacher)){
              //filtra por proyectos "en proceso" y/o "finalizados"
              if((vm.projects[i].state === "inProcess")||(vm.projects[i].state === "ended")){
                vm.asignedProjects.push(vm.projects[i]);
              }
            }
          }
          vm.projects=vm.asignedProjects;
      };
      //verificar si la lista(según el estado) está vacía
      vm.verify= function(){
        vm.empty=false;
        for (i = 0; i < vm.projects.length; i++){
          if(vm.projects[i].state==vm.search){
            vm.flag=true;
            break;
          }else{vm.flag=false;}
        }
        if(vm.flag==false){
          vm.empty=true;//muestra el mensaje de lista vacía
        }
      }

      //metodo viejo para cargar la lista NO BORRAR por favor
      // projectService.getProjects().then(function(res){
      //   vm.projects =  res.data;
      // })
    }

})();
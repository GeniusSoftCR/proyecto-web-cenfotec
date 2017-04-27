(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['projectService','SessionService'];

    function viewProjectsController(projectService,SessionService){
      var vm = this;
      vm.flag=false;//si la lista está vacía
      vm.empty=false;

      //trae la lista de proyectos
      projectService.getProjects({}).then(function(res){
        vm.projects =  res.data;
      });
      //el switch filtra el select del view
      switch(SessionService.session.role){
        case "admin":
        case "assistant":
          vm.test=true;
          break; 
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

      //metodo viejo para cargar la lista NO BORRAR PLS
      // projectService.getProjects().then(function(res){
      //   vm.projects =  res.data;
      // })
    }

})();
(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['projectService','SessionService'];

    function viewProjectsController(projectService,SessionService){
      var vm = this;
      vm.flag=false;
      vm.message=false;

      //el switch filtra el select del view y realiza peticiones de acuerdo al rol de usuario
      switch(SessionService.session.role){
        case "admin":
        case "assistant":
          vm.test=true;
          vm.param ={};
          projectService.getProjects(vm.param).then(function(res){
            vm.projects =  res.data;
          });
          break;
        default:
          vm.test=false;
          vm.param ={"professor":SessionService.session.idNum};
          projectService.getProjects(vm.param).then(function(res){
            vm.projects =  res.data;
          });
          break;  
      };

      vm.verify= function(){
        for (var i = vm.projects.length - 1; i >= 0; i--) {
          if(vm.projects[i].state==vm.search){
            vm.flag=true;
            break;
          }
        }
        if(vm.flag==false){
          vm.message=true;//muestra el mensaje de lista vacía
        }
      }

      //metodo viejo para cargar la lista NO BORRAR PLS
      // projectService.getProjects().then(function(res){
      //   vm.projects =  res.data;
      // })
    }

})();
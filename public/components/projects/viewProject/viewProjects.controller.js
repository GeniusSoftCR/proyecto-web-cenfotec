(function(){
  angular
    .module('cshApp')
    .controller('viewProjectsController', viewProjectsController);
    viewProjectsController.$inject= ['$q','projectService','SessionService'];

    function viewProjectsController($q,projectService,SessionService){

      var vm = this;
      vm.flag=false;  //bandera de veirificacion
      vm.empty=false; //mensaje de lista vacía
      vm.asignedProjects = [];  //filtro de proyectos
      vm.teacher=SessionService.session.idNum;

      //FILTRA el select del view y FILTRA la lista de proyectos
      switch(SessionService.session.role){
        case "admin":
        case "assistant":
          vm.test=true;
          projectService.getProjects({}).then(function(res){
          $q.when(res).then(function () {
            vm.projects=res.data;
            if(vm.projects.length==0){
              vm.empty=true;
            }
          })
        });
          break; 
        case "professor":
          projectService.getProjectsByTeacher({"id":vm.teacher}).then(function(res){
            $q.when(res).then(function () {
              vm.projects=res.data;
              if(vm.projects.length==0){
                vm.empty=true;
              }
            })
          });
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

      //metodo viejo para cargar la lista NO BORRAR por favor
      // projectService.getProjects().then(function(res){
      //   vm.projects =  res.data;
      // })
    }

})();
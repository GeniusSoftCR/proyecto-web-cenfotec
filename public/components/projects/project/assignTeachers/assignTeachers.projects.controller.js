// (function(){
//   'use strict';
//   angular.module('cshApp')
//     .controller('projectController', projectController);
//     .filter('startFrom', pagination);

//     projectController.$inject = ['$q','$stateParams','projectService'];

//     function projectController ($q,$stateParams,projectService) {

//       var vm = this;
//       vm.project = {};
//       projectService.getProjects({_id:$stateParams.id}).then(function (res) {
//         $q.when(res).then(function () {
//           vm.project=res.data[0];
//         })        
//       });

//     } 
// })();



(function(){
  'use strict';
  angular.module('cshApp')
    .controller('assignTeachersController', assignTeachersCtrl)
    .filter('startFrom', pagination);

    assignTeachersController.$inject = ['$q','$stateParams','projectService'];

    // function assignTeachersCtrl ($scope, $stateParams) {
    //   var vm = this;
    //   //guarda el id del proyecto que viene por parámetro
    //   vm.projectId = $stateParams.proyectoId;
    //   //trae el proyecto actual
    //   var mainProject = watchProjectService.getProjectbyId(vm.projectId);
    //   //trae lista de profesores
    //   var teachers = userProfessorService.getProfessors();
    //   //disponibilidad para proyectos

    //   vm.currentPage = 0;
    //   vm.pageSize = 1;
    //   vm.numberOfPages=function(){
    //       return Math.ceil(vm.teachers.length/vm.pageSize);                
    //   }
      
    //   vm.assignTeacher = function () {
    //     var teacherSelected = vm.assign.teacherChecked;
    //     var project = watchProjectService.getProjectbyId(vm.projectId);
    //     if (project.assitant == null) {
    //         project.assitant = [];
    //     }
    //     project.assitant.push(teacherSelected);
    //     var updateProjectRequest ={
    //       name: project.name,
    //       id : vm.projectId,
    //       state_key : project.state_key,
    //       clientId: project.clientId,
    //       professor: project.professor,
    //       assitant: project.assitant,
    //       executiveSummary : project.executiveSummary,
    //       objective: project.objective,
    //       images:project.images,
    //       funds : project.fundsToMakeProject,
    //       students: project.students,
    //       files :project.files
    //     }
    //     cshReqService.putProject(vm.projectId, updateProjectRequest);
    //   }
    // }

    // function pagination () {
    //   return function(input, start) {
    //       start = +start; //parse to int
    //       return input.slice(start);
    //   }
    // }
})();
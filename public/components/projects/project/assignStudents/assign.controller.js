(function(){
  'use strict';
  angular
  .module('cshApp')
  .controller('assignStudents', assignStudents);


  assignStudents.$inject = ['$q','$stateParams','projectService', 'userService','AuthService'];

  function assignStudents ($q, $stateParams, projectService,userService,AuthService) {
    var vm = this;
    vm.user = AuthService.getAuthUser();
    vm.project = {};
    vm.projectStudents = [];
    vm.students = {};
    vm.add = false;
    vm.del = false;
    var assignedStudents = _assignedStudents;
    //Trae los proyectos
    projectService.getProjects({_id:$stateParams.id}).then(function (res) {
      vm.project=res.data[0];
      assignedStudents();
    });    
    //traer lista de esudiantes
    userService.getUsers({"role":"student", "state":["active" ,"eligible"]}).then(function (res){
      vm.students = res.data;
      assignedStudents();
    });
    //Agregar estudiante
    vm.addStudent = function(student){
      var newStudent = {};
      newStudent._id = student._id;
      vm.project.students.push(newStudent);
      projectService.updateProject(vm.project).then(function(res){
      });
      $('#list-Modal').modal('hide');
        $('#retroS-Modal').modal('show');
        vm.msg="Estudiante asignado al proyecto corectamente";
      assignedStudents();
    };
    //Imprime nombres del los estudiantes dentro del proyecto
    function _assignedStudents(){
      angular.forEach(vm.students, function(student,key) {
        angular.forEach(vm.project.students, function(projectStudent,key){
          if(student._id == projectStudent._id){
            vm.projectStudents.push(student);
          }
        });
      });
    }
    //eliminar estudiante
    vm.deleteStudent= function(studentId){
      var project = vm.project;
      angular.forEach(project.students, function(student, key){
          console.log(studentId);
          if (studentId === student._id){
            vm.project.students.splice(key,1);
            projectService.updateProject(project).then(function(res){
            });
          }
      });
      $('#retroS-Modal').modal('show');
        vm.msg="Estudiante eliminado del proyecto correctamente";
      assignedStudents();  
    };
  }
})();
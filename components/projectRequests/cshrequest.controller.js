(function(){
  /* Controlador de Request de proyecto de Cenfotec Software House */
  'use strict';
  angular.module('cshApp')
    .controller('cshReqController', cshReqCtrlFn);

    function cshReqCtrlFn ($scope, ImageService, filepickerService, $window,Upload, cshReqService) {
      var cshReqCtrl = this;
      cshReqCtrl.cloudObj = ImageService.getConfiguration();
      //Files
      cshReqCtrl.pickFile = pickFile;
      cshReqCtrl.onSuccess = onSuccess;

      function pickFile(){
          filepickerService.pick(
              {extension: '.pdf',
              language: 'es',
              container: 'modal',
              services: ['COMPUTER']
              },
              onSuccess
          );
      };

      function onSuccess(Blob){
        // cshReqCtrl.files.push(Blob);
        cshReqCtrl.projectFile = Blob.url;
        // $window.localStorage.setItem('files', JSON.stringify(cshReqCtrl.files));
      };

      cshReqCtrl.preSave = function(){
        cshReqCtrl.cloudObj.data.file = document.getElementById("imageProjectRequest").files[0];
        Upload.upload(cshReqCtrl.cloudObj)
          .success(function(data){
            cshReqCtrl.save(data.url);
          });
      }

      cshReqCtrl.save= function(pimage){
        var newProjectRequest ={
          id : 1,
          state_key : 1,
          client: 1,
          professor: null,
          assitant: null,
          executiveSummary : cshReqCtrl.projectFile,
          objective: '',
           images:[
            {
              "url": pimage
            }
          ],
          funds : cshReqCtrl.clientData.fundsToMakeProject,
          students: [],
          files :[]
        }
        var newClient = {
          company : cshReqCtrl.clientData.company,
          companyIdNumber : cshReqCtrl.clientData.identificationNumber,
          clientName : cshReqCtrl.clientData.clientName,
          clientMail : cshReqCtrl.clientData.clientMail
        }

        cshReqService.addProject(newProjectRequest newClient);

        cshReqCtrl.clientData.company = null;
        cshReqCtrl.clientData.identificationNumber = null;
        cshReqCtrl.clientData.clientName = null;
        cshReqCtrl.clientData.clientMail = null;
        cshReqCtrl.clientData.fundsToMakeProject = null;
      }
    }
})();
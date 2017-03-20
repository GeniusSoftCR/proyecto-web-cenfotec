(function(){
 angular.module('cshApp', ['appRoutes','angular-filepicker','ngFileUpload','LocalStorageModule'])
//,'LocalStorageModule'
//localStorageServiceProvider
 .config(function (filepickerProvider) {
    filepickerProvider.setKey('ATHNKI5KATbile6a9svfXz');
    //localStorageServiceProvider.setPrefix('cshApp');
  });
})();
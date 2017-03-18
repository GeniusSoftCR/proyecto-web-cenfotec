/*(function(){
  angular.module('cshApp', ['appRoutes']);
})();*/

//https://material.angularjs.org/latest/Theming/03_configuring_a_theme
(function(){
  angular.module('cshApp', ['ui.router','ngFileUpload'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('green');
});//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, 
  //orange, deep-orange, brown, grey, blue-grey
})();
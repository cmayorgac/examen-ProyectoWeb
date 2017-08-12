(function(){
  angular
  .module('appRoutes', ['ui.router'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('home',{
          url : '/home', //ruta del url del estado
          templateUrl : 'components/home/home.view.html',//vista que se va a cargar para este estado
          controller: 'homeCtrl',
          controllerAs: 'vm'
        })
      $urlRouterProvider.otherwise('/home');
    }
})();

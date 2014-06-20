angular.module('satest', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('satest').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'partial/index/index.html'
    });
    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'partial/new/new.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');
});

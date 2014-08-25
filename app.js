angular.module('satest', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'hc.marked']);

angular.module('satest').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/tests',
        templateUrl: 'partial/index/index.html'
    });
    $stateProvider.state('new', {
        url: '/tests/new',
        templateUrl: 'partial/edit/edit.html'
    });
    $stateProvider.state('edit', {
        abstract: true,
        url: '/tests/:testId/edit',
        templateUrl: 'partial/edit/edit.html'
    });
    $urlRouterProvider.when('/tests/:testId/edit', '/tests/:testId/edit/texts');
    $stateProvider.state('edit.texts', {
        url: '/texts',
        templateUrl: 'partial/edit/texts/texts.html'
    });
    $stateProvider.state('edit.interpretations', {
        url: '/interpretations',
        templateUrl: 'partial/edit/interpretations/interpretations.html'
    });
    $stateProvider.state('edit.claimgroups', {
        url: '/groups',
        templateUrl: 'partial/edit/groups/groups.html'
    });
    $stateProvider.state('show', {
        url: '/tests/:testId',
        templateUrl: 'partial/show/show.html'
    });
    $stateProvider.state('show.claimgroup', {
        url: '/parts/:claimgroupId',
        views: {
            'content@show': {
                templateUrl: 'partial/show/claimgroup/claimgroup.html'
            }
        }
    });
    $stateProvider.state('show.result', {
        url: '/result',
        views: {
            'content@show': {
                templateUrl: 'partial/show/result/result.html'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/tests');
});
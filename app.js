angular.module('satest', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('satest').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/tests',
        templateUrl: 'partial/index/index.html'
    });
    $stateProvider.state('new', {
        url: '/tests/new',
        templateUrl: 'partial/new/new.html'
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

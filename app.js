angular.module('satest', ['ngCookies', 'ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'hc.marked']);

angular.module('satest').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // ADMIN USERS - requires authentication
    $stateProvider.state('edit', {
        abstract: true,
        url: '/tests/:testId/edit',
        templateUrl: 'partial/admin/edit/edit.html',
        authenticate: true
    });
    $urlRouterProvider.when('/tests/:testId/edit', '/tests/:testId/edit/general');
    $stateProvider.state('edit.general', {
        url: '/general',
        templateUrl: 'partial/admin/edit/general/general.html',
        authenticate: true
    });
    $stateProvider.state('edit.interpretations', {
        url: '/interpretations',
        templateUrl: 'partial/admin/edit/interpretations/interpretations.html',
        authenticate: true
    });
    $stateProvider.state('edit.claims', {
        url: '/claims',
        templateUrl: 'partial/admin/edit/claims/claims.html',
        authenticate: true
    });
    $stateProvider.state('user', {
        url: '/users',
        templateUrl: 'partial/admin/user/user.html',
        authenticate: true
    });
    $stateProvider.state('completed', {
        url: '/completed',
        templateUrl: 'partial/admin/user/user.html',
        authenticate: true
    });
    // ALL USERS - no authentication required
    $stateProvider.state('index', {
        url: '/tests',
        templateUrl: 'partial/index/index.html'
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
    $stateProvider.state('show.result.all', {
        url: '/all',
        views: {
            'content@show': {
                templateUrl: 'partial/show/result/all/all.html'
            }
        }
    });

    $stateProvider.state('signin', {
        url: '/signin',
        templateUrl: 'partial/admin/signin/signin.html'
    });
    $stateProvider.state('password', {
        url: '/password',
        template: '<div ui-view></div>',
        abstract: true
    });
    $stateProvider.state('password.remind', {
        url: '/remind',
        templateUrl: 'partial/admin/password/remind/remind.html'
    });
    $stateProvider.state('password.reset', {
        url: '/reset/:token',
        templateUrl: 'partial/admin/password/reset/reset.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/tests');

    $httpProvider.interceptors.push('authInterceptor');
});

angular.module('satest').factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
        // Add authorization token to headers
        request: function (config) {
            config.headers = config.headers || {};
            if ($cookieStore.get('satest_token')) {
                config.headers['X-Auth-Token'] = $cookieStore.get('satest_token');
            }
            return config;
        },

        // Intercept 401s and redirect you to signin
        responseError: function(response) {
            if(response.status === 401) {
                $location.path('/signin');
                // remove any stale tokens
                $cookieStore.remove('satest_token');
                $cookieStore.remove('satest_user');
                return $q.reject(response);
            }
            else {
                return $q.reject(response);
            }
        }
    };
});

angular.module('satest').run(function ($rootScope, $state, Authentication, Alert) {
    // Redirect to sign if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
        if (next.authenticate && !Authentication.isSignedIn()) {
            event.preventDefault();
            $state.go('signin');
        }
    });

    // Clear alerts when changing state
    $rootScope.$on('$stateChangeSuccess', function(){
        Alert.clear();
    });
});

angular.module('satest').value('backendUrl', 'http://testit.plotti.fi/api');
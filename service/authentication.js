angular.module('satest').factory('Authentication', function ($rootScope, $q, $http, $cookieStore, backendUrl) {
    var baseUrl = backendUrl + "/auth";

    var Authentication = {
        signIn:  function(user) {
            var deferred = $q.defer();
            $http.post(baseUrl, user).
                success(function(data, status, headers, config) {
                    $cookieStore.put('satest_token', data.token);
                    $cookieStore.put('satest_user', data.user);
                    deferred.resolve();
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        signOut: function() {
            var deferred = $q.defer();
            $http.delete(baseUrl).
                success(function(data, status, headers, config) {
                    $cookieStore.remove('satest_token');
                    deferred.resolve();
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        isSignedIn: function() {
            return $cookieStore.get('satest_token') !== null && $cookieStore.get('satest_token') !== undefined;
        },
        getUserId: function() {
            return $cookieStore.get('satest_user').id;
        }
    };

    $rootScope.isSignedIn = Authentication.isSignedIn;

    return Authentication;
});
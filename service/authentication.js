angular.module('satest').factory('Authentication', function ($rootScope, $q, $http, $cookieStore, backendUrl) {
    var authBaseUrl = backendUrl + "/auth";
    var passwordBaseUrl = backendUrl + "/password";

    var Authentication = {
        signIn:  function(user) {
            var deferred = $q.defer();
            $http.post(authBaseUrl, user).
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
            $http.delete(authBaseUrl).
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
        },
        remindPassword: function(user) {
            var deferred = $q.defer();
            $http.post(passwordBaseUrl + '/remind', user).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        resetPassword: function(user) {
            var deferred = $q.defer();
            $http.post(passwordBaseUrl + '/reset', user).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };

    $rootScope.isSignedIn = Authentication.isSignedIn;

    return Authentication;
});
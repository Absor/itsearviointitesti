angular.module('satest').factory('User',function($http, $q, backendUrl) {
    var baseUrl = backendUrl + "/users";

    var User = {
        findAll: function() {
            var deferred = $q.defer();
            $http.get(baseUrl).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        create: function(user) {
            var deferred = $q.defer();
            $http.post(baseUrl, user).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        destroy: function(user) {
            var deferred = $q.defer();
            $http.delete(baseUrl + "/" + user.id).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };

	return User;
});
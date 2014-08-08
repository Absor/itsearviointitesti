angular.module('satest').factory('saTest',function($q) {

	var saTest = {
        all: function() {
            var deferred = $q.defer();
            deferred.resolve([{
                name: "Test 1"
            }]);
            return deferred.promise;
        }
    };

	return saTest;
});
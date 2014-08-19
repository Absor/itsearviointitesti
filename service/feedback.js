angular.module('satest').factory('Feedback',function($q) {

	var Feedback = {
        create: function(feedback) {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        }
    };

	return Feedback;
});
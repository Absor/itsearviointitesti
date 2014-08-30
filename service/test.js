angular.module('satest').factory('Test',function($http, $q, backendUrl) {
    var baseUrl = backendUrl + "/tests";

    var getRandomColor = function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i=0; i<6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    var testModel = {
        title: "Testin nimi",
        maxChosenPerGroup: 3,
        showInterpretationThreshold: 0,
        descriptionPageText: "",
        testPagesText: "",
        interpretationPageText: "",
        interpretations: []
    };

    var interpretationModel = {
        category: "Teema-alue",
        type: "strength",
        text: "",
        color: getRandomColor()
    };

    var claimModel = {
        "text": "Väiteteksti",
        "claimgroupId": 1
    };

	var Test = {
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
        findOne: function(id) {
            var deferred = $q.defer();
            $http.get(baseUrl+"/"+id).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        create: function() {
            var deferred = $q.defer();
            $http.post(baseUrl, testModel).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        update: function(test) {
            var deferred = $q.defer();
            $http.put(baseUrl + "/" + test.id, test).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        destroy: function(test) {
            var deferred = $q.defer();
            $http.delete(baseUrl + "/" + test.id).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };

    Test.Interpretation = {
        create: function(test) {
            var deferred = $q.defer();
            $http.post(baseUrl + "/" + test.id + "/interpretations", interpretationModel).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        update: function(test, interpretation) {
            var deferred = $q.defer();
            $http.put(baseUrl + "/" + test.id + "/interpretations/" + interpretation.id, interpretation).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        destroy: function(test, interpretation) {
            var deferred = $q.defer();
            $http.delete(baseUrl + "/" + test.id + "/interpretations/" + interpretation.id).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };

    Test.Interpretation.Claim = {
        create: function(test, interpretation) {
            var deferred = $q.defer();
            $http.post(baseUrl + "/" + test.id + "/interpretations/" + interpretation.id + "/claims", claimModel).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        update: function(test, interpretation, claim) {
            var deferred = $q.defer();
            $http.put(baseUrl + "/" + test.id + "/interpretations/" + interpretation.id + "/claims/" + claim.id, claim).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        },
        destroy: function(test, interpretation, claim) {
            var deferred = $q.defer();
            $http.delete(baseUrl + "/" + test.id + "/interpretations/" + interpretation.id + "/claims/" + claim.id).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };

	return Test;
});
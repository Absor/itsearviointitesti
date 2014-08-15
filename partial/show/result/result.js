angular.module('satest').controller('ResultCtrl',function($scope){

    var interpretations;
    var getInterpretations = function() {
        if (!$scope.saTest) {
            return [];
        }
        if (!interpretations) {
            var basicInterpretations = _.clone($scope.saTest.interpretations);
            _.each(basicInterpretations, function(interpretation) {
                interpretation._enabledCount = countEnabled(interpretation.claims);
            });
            var filteredInterpretations = _.filter(basicInterpretations, function(interpretation) {
                return interpretation._enabledCount > 0;
            });
            var sortedFilteredInterpretations = _.sortBy(filteredInterpretations, function(interpretation, index, collection) {
                return -interpretation._enabledCount;
            });
            interpretations = _.groupBy(sortedFilteredInterpretations, 'type');
        }

        return interpretations;
    };

    $scope.getStrengths = function() {
        return getInterpretations()['strength'];
    };

    $scope.getWeaknesses = function() {
        return getInterpretations()['weakness'];
    };

    $scope.hasStrengths = function() {
        return _.size($scope.getStrengths()) !== 0;
    };

    $scope.hasWeaknesses = function() {
        return _.size($scope.getWeaknesses()) !== 0;
    };

    var countEnabled = function(claims) {
        return _.reduce(claims, function(sum, claim) {
            if (claim._chosen) {
                return sum + 1;
            }
            return sum;
        }, 0);
    };

    // TODO ei tuloksia -viesti
});
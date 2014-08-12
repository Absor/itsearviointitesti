angular.module('satest').controller('ResultCtrl',function($scope){
    $scope.getSortedInterpretations = function() {
        var interpretations = _.clone($scope.saTest.interpretations);
        return _.sortBy(interpretations, function(interpretation, index, collection) {
            return -$scope.countEnabled(interpretation.claims);
        });
    };

    $scope.countEnabled = function(claims) {
        return _.reduce(claims, function(sum, claim) {
            if (claim._chosen) {
                return sum + 1;
            }
            return sum;
        }, 0);
    };

    // TODO ei tuloksia -viesti
});
angular.module('satest').controller('AllCtrl',function($scope){
    var interpretations;
    var getInterpretations = function() {
        if (!$scope.test) {
            return [];
        }
        if (!interpretations) {
            interpretations = _.groupBy($scope.test.interpretations, 'type');
        }

        return interpretations;
    };

    $scope.getStrengths = function() {
        return getInterpretations()['strength'];
    };

    $scope.getWeaknesses = function() {
        return getInterpretations()['weakness'];
    };
});
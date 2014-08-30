angular.module('satest').controller('SingleInterpretationCtrl',function($scope, Test){
    var interpretationCopy;
    var uneditedCopy;
    $scope.getInterpretationCopy = function() {
        if (!interpretationCopy) {
            interpretationCopy = _.clone($scope.interpretation, true);
            delete interpretationCopy.claims;
            uneditedCopy = _.clone(interpretationCopy, true);
        }
        return interpretationCopy;
    };

    $scope.isEdited = function() {
        return !_.isEqual(interpretationCopy, uneditedCopy);
    };

    $scope.updateInterpretation = function() {
        Test.Interpretation.update($scope.getTest(), interpretationCopy).then(function(updatedInterpretation) {
            delete updatedInterpretation.claims;
            _.merge($scope.interpretation, updatedInterpretation);
            interpretationCopy = updatedInterpretation;
            uneditedCopy = _.clone(interpretationCopy, true);
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe tallennettaessa tulkintaa. Yritä uudelleen hetken kuluttua.' });
        });
    };
});
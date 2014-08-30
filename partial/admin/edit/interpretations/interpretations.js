angular.module('satest').controller('InterpretationsCtrl',function($scope, Test){
    $scope.deleteInterpretation = function(interpretation) {
        Test.Interpretation.destroy($scope.getTest(), interpretation).then(function(createdInterpretation) {
            _.remove($scope.getTest().interpretations, function(otherInterpretation) {
                return interpretation.id === otherInterpretation.id;
            });
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe poistettaessa tulkintaa. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.addInterpretation = function() {
        Test.Interpretation.create($scope.getTest()).then(function(createdInterpretation) {
            createdInterpretation.claims = createdInterpretation.claims || [];
            $scope.getTest().interpretations.push(createdInterpretation);
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe lisättäessä tulkintaa. Yritä uudelleen hetken kuluttua.' });
        });
    };
});
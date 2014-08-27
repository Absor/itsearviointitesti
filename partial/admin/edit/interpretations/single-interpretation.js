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

    $scope.claimsEdited = {};

    $scope.isInterpretationEdited = function() {
        return !_.isEqual(interpretationCopy, uneditedCopy);
    };

    $scope.isEdited = function() {
        // Is interpretation or its claims edited
        return !_.isEqual(interpretationCopy, uneditedCopy) || _.reduce($scope.claimsEdited, function(result, value, key) {
            if (value || result) {
                return true;
            }
            return false;
        }, false);
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

    $scope.addClaim = function(claims) {
        Test.Interpretation.Claim.create($scope.getTest(), $scope.interpretation, {
            "text": "Väiteteksti",
            "claimgroupId": 0
        }).then(function(newClaim) {
            claims.push(newClaim);
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe luotaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.deleteClaim = function(claims, claim) {
        Test.Interpretation.Claim.destroy($scope.getTest(), $scope.interpretation, claim).then(function(deletedClaim) {
            _.remove(claims, function(anotherClaim) {
                return anotherClaim === claim;
            });
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe poistettaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };
});
angular.module('satest').controller('SingleClaimCtrl',function($scope, Test){
    var claimCopy;
    var uneditedCopy;
    $scope.getClaimCopy = function() {
        if (!claimCopy) {
            claimCopy = _.clone($scope.claim, true);
            uneditedCopy = _.clone(claimCopy, true);
        }
        return claimCopy;
    };

    $scope.isEdited = function() {
        // Is interpretation or its claims edited
        return !_.isEqual(claimCopy, uneditedCopy);
    };

    $scope.updateClaim = function() {
        Test.Interpretation.Claim.update($scope.getTest(), {id: claimCopy.interpretation_id}, claimCopy).then(function(updatedClaim) {
            _.merge($scope.claim, updatedClaim);
            claimCopy = updatedClaim;
            uneditedCopy = _.clone(claimCopy, true);
            $scope.refreshClaims();
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe tallennettaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };
});
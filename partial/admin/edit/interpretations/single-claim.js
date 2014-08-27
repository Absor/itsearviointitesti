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

    $scope.isClaimEdited = function() {
        // Is interpretation or its claims edited
        return !_.isEqual(claimCopy, uneditedCopy);
    };

    $scope.updateClaim = function() {
        Test.Interpretation.Claim.update($scope.getTest(), $scope.interpretation, claimCopy).then(function(updatedClaim) {
            _.merge($scope.claim, updatedClaim);
            claimCopy = updatedClaim;
            uneditedCopy = _.clone(claimCopy, true);
            $scope.claimChanged();
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe tallennettaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.claimChanged = function() {
        $scope.claimsEdited[$scope.claim.id] = $scope.isClaimEdited();
    };
});
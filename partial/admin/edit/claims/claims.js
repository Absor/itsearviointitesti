angular.module('satest').controller('ClaimsCtrl',function($scope, Test){

    var claimGroups = null;
    $scope.getClaimgroups = function() {
        if (!claimGroups) {
            if (!$scope.getTest()) {
                return;
            }
            $scope.refreshClaims();
        }
        return claimGroups;
    };

    $scope.isClaimgroupsEmpty = function() {
        return _.isEmpty($scope.getClaimgroups());
    };

    $scope.refreshClaims = function() {
        var allClaims = _.reduce($scope.getTest().interpretations, function(array, interpretation) {
            return array.concat(interpretation.claims);
        }, []);
        claimGroups = _.toArray(_.groupBy(allClaims, 'claimgroupId'));
    };

    $scope.addClaim = function() {
        Test.Interpretation.Claim.create($scope.getTest(), $scope.getTest().interpretations[0]).then(function(newClaim) {
            $scope.findClaimInterpretation(newClaim).claims.push(newClaim);
            $scope.refreshClaims();
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe luotaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.deleteClaim = function(claim) {
        var interpretation = $scope.findClaimInterpretation(claim);
        Test.Interpretation.Claim.destroy($scope.getTest(), interpretation, claim).then(function(deletedClaim) {
            _.remove(interpretation.claims, function(anotherClaim) {
                return anotherClaim === claim;
            });
            $scope.refreshClaims();
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe poistettaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.canAddClaim = function() {
        return $scope.getTest() && $scope.getTest().interpretations.length !== 0;
    };

    $scope.findClaimInterpretation = function(claim) {
        return _.find($scope.getTest().interpretations, function(interpretation) {
            return interpretation.id === claim.interpretation_id;
        });
    };
});